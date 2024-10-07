const API_URL = import.meta.env.VITE_BACKEND_URL; // API의 기본 URL을 .env에서 불러옵니다.

// 기본적인 Fetch 요청 처리 함수
async function request(endpoint, method = 'GET', data = null, headers = {}) {
  // 기본 요청 메서드는 GET입니다.
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  // API 서버로 넘길 data를 json<string>으로 변환합니다.
  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);

    // 응답이 성공적이지 않은 경우 오류를 던집니다.
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    let contentType = response.headers.get('Content-Type');

    // 응답 데이터를 JSON으로 반환합니다.
    if (contentType.includes('application/json')) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error('요청 실패:', error);
    throw error; // 오류를 호출한 곳으로 다시 던집니다.
  }
}

// GET 요청
async function GET(endpoint) {
  return await request(endpoint, 'GET');
}

// POST 요청
async function POST(endpoint, data) {
  return await request(endpoint, 'POST', data);
}

// PUT 요청
async function PUT(endpoint, data) {
  return await request(endpoint, 'PUT', data);
}

// DELETE 요청
async function DELETE(endpoint) {
  return await request(endpoint, 'DELETE');
}

export const API = {
  GET,
  POST,
  PUT,
  DELETE,
};
