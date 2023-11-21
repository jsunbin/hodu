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

// 상품 삭제하기
export const deleteProduct = async productId => {
  try {
    const response = await authInstance.delete(`/products/${productId}`);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

// 상품 등록하기
export const addProduct = async body => {
  try {
    const response = await authInstance.post('/products/', body);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
