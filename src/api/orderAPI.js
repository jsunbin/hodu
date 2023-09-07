import axios from 'axios';

export const cartOrderAPI = async (accessToken, requestBody) => {
  try {
    const response = await axios.post(
      'https://openmarket.weniv.co.kr/order',
      requestBody,

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
