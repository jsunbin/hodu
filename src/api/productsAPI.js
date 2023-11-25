import axios from 'axios';
import { defaultInstance } from '../utils/axios';

// 상품 전체
export const productsAPI = async ({
  endPoint = 'https://openmarket.weniv.co.kr/products/',
}) => {
  try {
    const response = await axios.get(endPoint);

    return response;
  } catch (error) {
    throw error;
  }
};

// 상품 상세
// export const productsDetailAPI = async productId => {
//   try {
//     const response = await axios.get(
//       `https://openmarket.weniv.co.kr/products/${productId}`,
//     );
//
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

// 상품 상세: instance
export const productsDetailAPI = async productId => {
  try {
    const response = await defaultInstance.get(`/products/${productId}`);

    return response;
  } catch (e) {
    console.log(e);
  }
};
