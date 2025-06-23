const BOARD_API_URL: string = "/board";
const USER_API_URL: string = "/user";
const CTEGORIES_API_URL: string = "/categories";

/**
 * ## API 엔드포인트 정의
 * | axios URI의 경우
 * - Axios.create()에서 baseURL을 설정하여 사용하기 때문에
 * 경로만 추가하여 효율적으로 사용할 수 있도록 구성
 *
 * ###API 엔드포인트를 관리하는 객체
 * - BOARD: 게시판 관련 API
 * - USER: 사용자 관련 API
 * - CATEGORIES: 카테고리 관련 API
 */
const API_URLS = {
  BOARD: BOARD_API_URL,
  USER: USER_API_URL,
  CATEGORIES: CTEGORIES_API_URL,
};

export default API_URLS;
