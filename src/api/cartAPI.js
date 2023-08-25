import axios from 'axios';

// 장바구니 목록
export const cartListAPI = async accessToken => {
  try {
    const response = await axios.get('https://openmarket.weniv.co.kr/cart/', {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

// 장바구니 추가
export const addCartAPI = async ({
  accessToken,
  productId,
  amount,
  isAvailable,
}) => {
  try {
    console.log({
      accessToken,
      productId,
      amount,
      isAvailable,
    });

    console.log(productId);
    const response = await axios.post(
      'https://openmarket.weniv.co.kr/cart/',
      {
        product_id: productId,
        quantity: amount,
        check: isAvailable,
      },
      {
        headers: {
          Authorization: `JWT ${accessToken}`,
        },
      },
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// 장바구니 수량 수정
export const amountCartAPI = async (
  accessToken,
  cartItemId,
  productId,
  quantity,
  isActive = true,
) => {
  try {
    console.log(accessToken, cartItemId, productId, quantity, isActive);
    const response = await axios.put(
      `https://openmarket.weniv.co.kr/cart/${cartItemId}/`,
      {
        product_id: productId,
        quantity: quantity,
        is_active: isActive, // 장바구니 내 상품 활성화 버튼, 같이 보내지 않으면 False
      },
      {
        headers: {
          Authorization: `JWT ${accessToken}`,
        },
      },
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// 장바구니 상품 개별 삭제
export const deleteCartItemAPI = async (accessToken, cartItemId) => {
  try {
    const response = await axios.delete(
      `https://openmarket.weniv.co.kr/cart/${cartItemId}/`,
      {
        headers: {
          Authorization: `JWT ${accessToken}`,
        },
      },
    );

    return response;
  } catch (error) {
    throw error;
  }
};
