/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function ProductTableItemPayment({ item }) {
  const shippingFee =
    item.shipping_fee === 0
      ? '무료배송'
      : `${parseInt(item.shipping_fee).toLocaleString()}원`;

  const totalItemPrice = parseInt(
    item.price * item.totalAmount,
  ).toLocaleString();

  return (
    <>
      <td colSpan={2}>
        <div css={productInfoDivStyles}>
          <a href={`/product/${item.product_id}`}>
            <img src={item.image} alt="상품이미지" />
          </a>
          <div css={productBasicInfoDivStyles}>
            <span className="product-seller">{item.store_name}</span>
            <a href={`/product/${item.product_id}`}>
              <strong className="product-name">{item.product_name}</strong>
            </a>
            <span className="product-amount">수량: {item.totalAmount}개</span>
          </div>
        </div>
      </td>
      <td>
        <div css={tdDivStyles}>-</div>
      </td>
      <td>
        <div css={tdDivStyles}>{shippingFee}</div>
      </td>
      <td>
        <div css={priceStyles}>{totalItemPrice}원</div>
      </td>
    </>
  );
}

const productInfoDivStyles = css({
  display: 'flex',
  img: {
    width: '104px',
    height: '104px',
    borderRadius: '10px',
    margin: '8px 36px 18px 8px',
  },
});

const productBasicInfoDivStyles = css({
  fontFamily: 'Spoqa Han Sans Neo',
  fontWeight: '400',
  textAlign: 'left',
  marginTop: '20px',
  '.product-seller': {
    color: '#767676',
    fontSize: '14px',
    marginTop: '20px',
  },
  '.product-name': {
    display: 'block',
    color: '#000',
    fontSize: '18px',
    lineHeight: '22px',
    margin: '10px 0',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  '.product-amount': {
    color: '#767676',
    fontSize: '14px',
  },
});

const tdDivStyles = css({
  color: '#767676',
  fontSize: '18px',
  fontWeight: '400',
});

const priceStyles = css({
  color: '#000',
  fontSize: '18px',
  fontWeight: '700',
});
