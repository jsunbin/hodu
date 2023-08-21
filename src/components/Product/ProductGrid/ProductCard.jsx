/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Price from '../../Price/Price';

export default function ProductCard({ item }) {
  const price = item.price.toLocaleString();

  return (
    <article css={articleStyle} className="product-card">
      <a
        href={`/product/${item.product_id}`}
        className="product-link"
        rel="noreferrer"
      >
        <div css={productImgStyle} className="product-img">
          <img src={item.image} alt={item.product_name} />
        </div>
        <div css={productInfoStyle} className="product-info">
          <span className="product-seller">{item.store_name}</span>
          <h3 className="product-name">{item.product_name}</h3>
          <Price size="md">{price}</Price>
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
