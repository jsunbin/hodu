/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Price from '../../Price/Price';

export default function ProductCard() {
  return (
    <article css={articleStyle} className="product-card">
      <a
        href="https://www.naver.com/"
        className="product-link"
        rel="noreferrer"
      >
        <div css={productImgStyle} className="product-img">
          <img src="https://picsum.photos/380" alt="상품 이름" />
        </div>
        <div css={productInfoStyle} className="product-info">
          <span className="product-seller">우당탕탕 라이캣의 실험실</span>
          <h3 className="product-name">Hack Your Life 개발자 노트북 파우치</h3>
          <Price size="md">29,000</Price>
        </div>
      </a>
    </article>
  );
}

const articleStyle = css({
  width: '380px',
  height: '490px',
  '&:hover': { textDecoration: 'underline' },
});

const productImgStyle = css({
  width: '380px',
  height: '380px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    verticalAlign: 'top',
    border: '1px solid #c4c4c4',
  },
});

const productInfoStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
  width: '100%',
  marginTop: '16px',
  fontFamily: 'Spoqa Han Sans Neo',
  '& .product-seller': {
    display: 'block',
    color: '#767676',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '22px',
  },
  '& .product-name': {
    color: '#000',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '22px',
  },
});
