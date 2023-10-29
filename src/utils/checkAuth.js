// 토큰 유효성 검사
import { authInstance } from './axios';
export const checkAuth = async () => {
  try {
    const response = await authInstance.get('/order/');
    console.log(response);
    return 'Authorized';
  } catch (e) {
    console.log(e);
    if (e.response.status === 401) {
      return 'Unauthorized';
    }
  }
};
