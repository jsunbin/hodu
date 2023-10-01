/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import CheckText from '../CheckText/CheckText';
import Button from '../Button/Button';
import Price from '../Price/Price';
import { useRecoilState } from 'recoil';
import { orderItemAtom } from '../../recoil/OrderAtom';

export default function FinalPaymentInfo({ values, onChange }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [orderItems, setOrderItems] = useRecoilState(orderItemAtom);

  console.log(orderItems);

  return (
    <div>
      <h3 css={h3Styles}>최종 결제 정보</h3>
      <section css={sectionStyles}>
        <div css={paymentInfoDivStlyes}>
          <div css={divItemStyles}>
            <span css={spanStyles}>&#00;-&#08;상품금액</span>
            <Price size="sm">{orderItems.productPrice}</Price>
          </div>
          <div css={divItemStyles}>
            <span css={spanStyles}>&#00;-&#08;할인금액</span>
            <Price size="sm">0</Price>
          </div>
          <div css={divItemStyles}>
            <span css={spanStyles}>&#00;-&#08;배송비</span>
            <Price size="sm">{orderItems.deliveryFee}</Price>
          </div>
          <div css={divItemStyles}>
            <span css={spanStyles}>&#00;-&#08;결제금액</span>
            <strong>{orderItems.totalPrice.toLocaleString()}원</strong>
          </div>
        </div>

        <div css={finalCheckDIvStlyes}>
          <CheckText setIsDisabled={setIsDisabled}>
            주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
          </CheckText>

          <Button size="lg" disabled={isDisabled} type="submit">
            결제하기
          </Button>
        </div>
      </section>
    </div>
  );
}
const h3Styles = css`
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 18px;
`;

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 480px;
  min-height: 400px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #21bf48;
`;

const paymentInfoDivStlyes = css`
  padding: 34px 24px 20px;
`;
const divItemStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15px;
  :first-of-type {
    margin: 0;
  }
  :last-child {
    margin-top: 49px;
    position: relative;
    ::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      top: -24px;
      left: 0;
      background: #c4c4c4;
    }
  }
  strong {
    color: var(--red, #eb5757);
    text-align: right;
    font-family: Spoqa Han Sans Neo;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const spanStyles = css`
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const finalCheckDIvStlyes = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 182px;
  flex-shrink: 0;
  gap: 30px;
  border-radius: 0 0 10px 10px;
  background: var(--gray-6, #f2f2f2);
`;
