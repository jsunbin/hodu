/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import Amount from '../../common/Amount/Amount';
import Button from '../../Button/Button';

export default function ProductTableItemCart() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = event => {
    event.preventDefault();
    setIsChecked(!isChecked);
  };

  return (
    <article css={productItemArticleStyles}>
      <div css={css({ margin: '0 30px' })}>
        <label>
          <input
            title="모든 상품을 결제상품으로 설정"
            type="checkbox"
            className="a11y-hidden"
            checked={isChecked}
            readOnly
          />
          <div css={allOrderSelectStyles} onClick={handleCheckBoxClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="9" stroke="#21BF48" strokeWidth="2" />
              {isChecked && <circle cx="10" cy="10" r="6" fill="#21BF48" />}
            </svg>
          </div>
        </label>
      </div>

      <div css={productInfoDivStyles}>
        <a href="/#">
          <img src="https://picsum.photos/160" alt="상품이미지" />
        </a>
        <div css={productBasicInfoDivStyles}>
          <span className="product-seller">백엔드 글로벌</span>
          <a href="/#">
            <strong className="product-name">딥러닝 개발자 무릎 담요</strong>
          </a>
          <span className="product-unit-price">17,500원</span>
          <span css={deliveryOptionsSpanStyles}>택배배송 / 무료배송</span>
        </div>
      </div>

      <div css={css({ margin: '0 48px' })}>
        <Amount />
      </div>

      <div css={productTotalPrice}>
        <span>17,500원</span>
        <Button size="sm" width="130px">
          주문하기
        </Button>
      </div>

      <div css={itemDeleteStyles}>
        <button type="button">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.14258 18.2842L18.2847 4.14204"
              stroke="#C4C4C4"
              stroke-width="2"
            />
            <path
              d="M18.1426 18.1421L4.00044 3.99996"
              stroke="#C4C4C4"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}

const productItemArticleStyles = css({
  display: 'flex',
  width: '1280px',
  height: '200px',
  alignItems: 'center',
  borderRadius: '10px',
  border: '2px solid #e0e0e0',
  background: '#fff',
  position: 'relative',
});

const allOrderSelectStyles = css({
  cursor: 'pointer',
  svg: {
    verticalAlign: 'middle',
  },
});

const productInfoDivStyles = css({
  display: 'flex',
  img: {
    width: '164px',
    height: '164px',
    borderRadius: '10px',
    margin: '0 36px 0 10px',
  },
});

const productBasicInfoDivStyles = css({
  fontFamily: 'Spoqa Han Sans Neo',
  fontWeight: '400',
  textAlign: 'left',
  '.product-seller': {
    color: '#767676',
    fontSize: '14px',
    marginTop: '6px',
  },
  '.product-name': {
    display: 'block',
    width: '418px',
    color: '#000',
    fontSize: '18px',
    lineHeight: '22px',
    margin: '10px 0',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  '.product-unit-price': {
    color: '#000',
    fontSize: '16px',
    fontWeight: '700',
  },
});

const deliveryOptionsSpanStyles = css({
  display: 'block',
  color: '#767676',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '14px',
  fontWeight: '400',
  marginTop: '40px',
});

const productTotalPrice = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '26px',
  margin: '0 100px',
  span: {
    color: '#eb5757',
    textAlign: 'center',
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '18px',
    fontWeight: '700',
  },
});

const itemDeleteStyles = css({
  position: 'absolute',
  top: '18px',
  right: '18px',
  button: {
    background: 'transparent',
  },
});
