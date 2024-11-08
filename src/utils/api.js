import axios from 'axios';

// API URL과 인증 토큰 저장 경로
const API_URL = import.meta.env.VITE_BACKEND_URL ?? '';

// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000, // 3초 타임아웃 설정
});

// 요청 인터셉터: 모든 요청에 액세스 토큰을 헤더에 포함
api.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('accessToken')) {
      config.headers.Authorization = localStorage.getItem('accessToken');
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터: 401 (Unauthorized) 응답이 오면 토큰을 갱신
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 토큰이 만료되어 401이나 403 응답이 온 경우
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry &&
      localStorage.getItem('accessToken') &&
      localStorage.getItem('refreshToken')
    ) {
      originalRequest._retry = true; // 무한 루프 방지

      try {
        // 리프레시 토큰으로 새로운 액세스 토큰 요청
        const { data } = await axios.post(`${API_URL}/api/auth/refresh`, {
          refresh_token: localStorage.getItem('refreshToken'),
        });

        if (data.access_token) {
          localStorage.setItem('accessToken', data.access_token);
        }
        if (data.refresh_token) {
          localStorage.setItem('refreshToken', data.refresh_token);
        }

        // 실패했던 요청에 새로운 토큰 적용
        originalRequest.headers.Authorization =
          localStorage.getItem('accessToken');

        // 실패한 요청 다시 시도
        return api(originalRequest);
      } catch (refreshError) {
        // 리프레시 토큰도 만료된 경우 로그아웃 처리
        // console.error('토큰 갱신 실패:', refreshError);
        // 로그아웃 처리 로직 추가 (예: 페이지 리다이렉션)
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

// API 요청 함수들 (GET, POST, PUT, DELETE)
async function GET(endpoint, data = { headers: {} }) {
  return await api.get(`/api${endpoint}`, { headers: data.headers });
}

async function POST(endpoint, data = { body: {}, headers: {} }) {
  return await api.post(`/api${endpoint}`, data.body, {
    headers: data.headers,
  });
}

async function PUT(endpoint, data = { body: {}, headers: {} }) {
  return await api.put(`/api${endpoint}`, data.body, {
    headers: data.headers,
  });
}

async function DELETE(endpoint, data = { headers: {} }) {
  return await api.delete(`/api${endpoint}`, { headers: data.headers });
}

export const API = {
  GET,
  POST,
  PUT,
  DELETE,
};
