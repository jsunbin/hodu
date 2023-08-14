import axios from 'axios';

// 로그인
export const loginAPI = async ({ id, password, isSeller }) => {
  try {
    const response = await axios.post(
      'https://openmarket.weniv.co.kr/accounts/login/',
      {
        username: id,
        password: password,
        login_type: isSeller ? 'SELLER' : 'BUYER',
      },
    );

    return response;
  } catch (error) {
    throw error;
  }
};
