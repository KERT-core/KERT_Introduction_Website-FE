export function GenerateColorByString(...str) {
  // 두 문자열을 결합
  const combinedString = [str].join('');

  // 결합된 문자열의 해시값 생성
  let hash = 0;
  for (let i = 0; i < combinedString.length; i++) {
    hash = combinedString.charCodeAt(i) + ((hash << 5) - hash);
  }

  // 해시값을 6자리 HEX 코드로 변환
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).slice(-2);
  }

  return color;
}
