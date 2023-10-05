/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function DeliveryMethod({
  styles,
  shippingMethod,
  shippingFee,
}) {
  const deliveryMethod = shippingMethod === 'PARCEL' ? 'EMS' : '택배배송';
  const deliveryFee = shippingFee === 0 ? '무료배송' : `${shippingFee}원`;

  return (
    <span css={styles}>
      {deliveryMethod} / {deliveryFee}
    </span>
  );
}

const deliveryOptionsSpanStyles = css`
  display: block;
  color: #767676;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  border-bottom: 2px solid #c4c4c4;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

const spanStyles = css`
  display: block;
  color: #767676;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  margin-top: 40px;
`;
