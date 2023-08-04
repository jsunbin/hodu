/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

export default function Amount() {
  const [amount, setAmount] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);

  const minusClickHandler = () => {
    setAmount(prev => prev - 1);
  };

  const plusClickHandelr = () => {
    setAmount(prev => prev + 1);
  };

  useEffect(() => {
    console.log(amount);
    if (amount === 1) {
      setIsDisabled(true);
    } else if (amount > 1) {
      setIsDisabled(false);
    }
  }, [amount]);

  return (
    <div css={amountDivStyles}>
      <button
        css={minusButtonStlyes}
        type="button"
        className="btn-minus"
        onClick={minusClickHandler}
        disabled={isDisabled}
      >
        <span className="a11y-hidden">수량 빼기</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 10H20" stroke="#C4C4C4" strokeWidth="2" />
        </svg>
      </button>
      <strong css={strongStyles}>{amount}</strong>
      <button
        css={plusButtonStlyes}
        type="button"
        className="btn-plus"
        onClick={plusClickHandelr}
      >
        <span className="a11y-hidden">수량 추가</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 9.5H20" stroke="#C4C4C4" strokeWidth="2" />
          <path d="M10 20L10 0" stroke="#C4C4C4" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}

const amountDivStyles = css({
  width: '150px',
  height: '50px',
  textAlign: 'center',
  lineHeight: '50px',
  borderRadius: '5px',
  background: '#fff',
  position: 'relative',
});

const strongStyles = css({
  display: 'inline-block',
  height: '100%',
  width: '52px',
  color: '#000',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '18px',
  fontWeight: '400',
  borderTop: '1px solid #c4c4c4',
  borderBottom: '1px solid #c4c4c4',
});

const minusButtonStlyes = css({
  display: 'flex',
  width: '49px',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px 0 0 5px',
  background: '#fff',
  position: 'absolute',
  top: '0',
  left: '0',
  border: '1px solid #c4c4c4',
  ':disabled': {
    backgroundColor: '#e0e0e0',
    svg: {
      path: {
        stroke: '#f2f2f2',
      },
    },
  },
});
const plusButtonStlyes = css({
  display: 'flex',
  width: '49px',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0 5px 5px 0',
  backgroundColor: '#c4c4c4',
  background: '#fff',
  position: 'absolute',
  top: '0',
  right: '0',
  border: '1px solid #c4c4c4',
  ':disabled': {
    backgroundColor: '#e0e0e0',
    svg: {
      path: {
        stroke: '#f2f2f2',
      },
    },
  },
});
