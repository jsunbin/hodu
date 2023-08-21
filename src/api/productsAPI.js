import axios from 'axios';

// 상품 전체
export const productsAPI = async ({
  accessToken,
  endPoint = 'https://openmarket.weniv.co.kr/products/',
}) => {
  try {
    console.log(endPoint);
    const response = await axios.get(endPoint, { Authorization: accessToken });

    return response;
  } catch (error) {
    throw error;
  }
};
