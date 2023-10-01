import axios from 'axios';

export const cartOrderAPI = async (accessToken, raw) => {
  console.log('-> raw', raw);
  try {
    const response = await axios.post(
      'https://openmarket.weniv.co.kr/order/',
      raw,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${accessToken}`,
        },
      },
    );
    return response;
  } catch (error) {
    throw error;
  }
};
