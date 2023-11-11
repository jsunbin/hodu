import { defaultInstance, authInstance } from '../utils/axios';

// 판매자 상품 불러오기
export const getSellersProducts = async () => {
  try {
    const response = await authInstance.get('/seller/');

    console.log(response);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
