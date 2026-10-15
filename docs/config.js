// 신규간호사 발령 유지관리 시스템 — 설정
// 이 파일만 고치면 연결 주소와 비교 기준을 바꿀 수 있습니다.
window.DASH_CONFIG = {
  // Apps Script 웹앱 주소 (README.md 2단계에서 복사한 주소, 끝이 /exec)
  API_URL: 'https://script.google.com/macros/s/AKfycbwc5zxAp7yP95XZmlEhLCVEZrtlzZ8_xMTVWn1y7gKYV6iSpH8otHqx5jFXSMv7u8Pn/exec',

  // 관리자 전용 사직자 명단 페이지 (원본 시트 접근 권한이 있는 계정만 열람)
  ADMIN_URL: 'https://script.google.com/macros/s/AKfycbxcWbV3KAnq5ivlE_AuhsmF8bMcci980Qk1rNUwtN49pQUdnZjpAY-FaXAmD9fyFTQygA/exec',

  // 구글 로그인용 OAuth 클라이언트 ID (간호교육 참석현황 대시보드와 같은 클라이언트)
  // 구글 클라우드 콘솔에서 이 클라이언트의 '승인된 자바스크립트 원본'에 대시보드 주소가 등록되어 있어야 함
  GOOGLE_CLIENT_ID: '497800427820-0jftci511sots7lcfv2533hnfnnfudpp.apps.googleusercontent.com',

  // 관리 목표 사직율 (0.20 = 20%)
  TARGET: 0.20,

  // 전년도 신규간호사 전체 발령인원·사직율 (발령현황 상단 비교값)
  PREV_ALL: {
    2025: { placed: 143, rate: 0.203 },
    2024: { placed: 167, rate: 0.186 },
  },
};
