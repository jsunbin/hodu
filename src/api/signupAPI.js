import axios from 'axios';

// 계정 검증
export const accountsValid = async userId => {
  try {
    const response = await axios.post(
      'https://openmarket.weniv.co.kr/accounts/signup/valid/username/',
      { username: userId },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// 가입
export const signup = async requestBody => {
  try {
    const response = await axios.post(
      'https://openmarket.weniv.co.kr/accounts/signup/',
      requestBody,
    );

    return response;
  } catch (error) {
    throw error;
  }
};
