import axios from 'axios';
import { authInstance, defaultInstance } from '../utils/axios';

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
export const signup = async (endpoint, requestBody) => {
  try {
    const response = await axios.post(
      `https://openmarket.weniv.co.kr/${endpoint}`,
      requestBody,
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// 사업자등록번호 검증: 판매자
export const companyRegistrationNumberValid = async requestBody => {
  try {
    const response = await defaultInstance.post(
      '/accounts/signup/valid/company_registration_number/',
      requestBody,
    );

    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
