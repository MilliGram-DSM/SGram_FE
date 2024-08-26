import axios from "axios";

// 환경변수를 사용하여 서버 URL을 관리하는 것이 좋습니다.
const BASE_URL = "http://172.21.103.253:8080/users";

export const login = async data => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error("Login error:", error);
    throw error; // 에러를 호출하는 곳에서 처리할 수 있도록 던짐
  }
};

export const signUp = async data => {
  try {
    const response = await axios.post(`${BASE_URL}/join`, data);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error("SignUp error:", error);
    throw error; // 에러를 호출하는 곳에서 처리할 수 있도록 던짐
  }
};
