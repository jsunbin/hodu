/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import Price from '../../components/Price/Price';
import minusIcon from '../../assets/images/icon-minus-2.svg';
import plusIcon from '../../assets/images/icon-plus-2.svg';
import { useRecoilState } from 'recoil';
import { CartItemAtom } from '../../recoil/CartItemAtom';
import { useEffect } from 'react';

export default function OrderTotalBox({ checkList, isAmountChanged }) {
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const [totalShippingFee, setTotalShippingFee] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  console.log('total: ', checkList);

  useEffect(() => {
    console.log(checkList);
    setTotalProductPrice(
      checkList
        .filter(item => item.isChecked)
        .reduce((total, item) => total + item.price, 0),
    );
    setTotalShippingFee(
      checkList
        .filter(item => item.isChecked)
        .reduce((total, item) => total + item.deliveryFee, 0),
    );
  }, [isAmountChanged, checkList]);

  useEffect(() => {
    setTotalPrice(totalProductPrice + totalShippingFee);
  }, [totalProductPrice, totalShippingFee]);

  return (
    <div css={orderTotalBoxWrapDivStyles}>
      <div
        css={[
          itemStyles,
          itemStylesIcon,
          css`
            ::after {
              background: url(${minusIcon}) center no-repeat;
            }
          `,
        ]}
      >
        <h4>총 상품금액</h4>
        <Price size="md">{totalProductPrice}</Price>
      </div>

      <div
        css={[
          itemStyles,
          itemStylesIcon,
          css`
            ::after {
              background: url(${plusIcon}) center no-repeat;
            }
          `,
        ]}
      >
        <h4>상품할인</h4>
        <Price size="md">0</Price>
      </div>

      <div css={itemStyles}>
        <h4>배송비</h4>
        <Price size="md">{totalShippingFee}</Price>
      </div>

      <div css={itemStyles}>
        <h4>결제 예정 금액</h4>
        <Price size="lg" color="#EB5757">
          {totalPrice}
        </Price>
      </div>
    </div>
  );
}

const orderTotalBoxWrapDivStyles = css`
  display: flex;
  width: 1280px;
  border-radius: 10px;
  background: var(--gray-6, #f2f2f2);
  margin: 45px 0 40px;
`;

const itemStyles = css`
  display: flex;
  width: 320px;
  height: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
  h4 {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }
`;

const itemStylesIcon = css`
  ::after {
    content: '';
    display: block;
    width: 34px;
    height: 34px;
    /* background: url(${minusIcon}) center no-repeat; */
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
`;
