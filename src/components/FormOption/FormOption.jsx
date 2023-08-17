/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';

export default function FormOption({
  type = 'login',
  defaultOption,
  setIsSeller,
}) {
  const [activeOption, setActiveOption] = useState(defaultOption);

  const handleOptionClick = (event, userOption) => {
    event.preventDefault();
    setIsSeller(userOption);
    setActiveOption(userOption);

    const button = event.target.closest('button');
    button.classList.add('acitve');
  };

  return (
    <ul css={listStyles} className="login-options">
      <li>
        <button
          css={btnStyles}
          className={`btn-customer ${!activeOption && 'active'}`}
          onClick={event => handleOptionClick(event, false)}
        >
          <span css={spanStyles}>
            구매{type === 'login' ? '회원 로그인' : '회원가입'}
          </span>
        </button>
      </li>
      <li>
        <button
          css={btnStyles}
          className={`btn-seller ${activeOption && 'active'}`}
          onClick={event => handleOptionClick(event, true)}
        >
          <span css={spanStyles}>
            판매{type === 'login' ? '회원 로그인' : '회원가입'}
          </span>
        </button>
      </li>
    </ul>
  );
}

const listStyles = css({
  width: '100%',
  height: '80px',
  marginBottom: '-20px',
  '& li': {
    display: 'inline-block',
    width: '50%',
    height: '100%',
  },
});

const btnStyles = css({
  width: '100%',
  height: '100%',
  color: '#000',
  textAlign: 'center',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '22px',
  borderRadius: '10px',
  border: '1px solid #c4c4c4',
  background: '#f2f2f2',
  paddingTop: '20px',
  position: 'relative',
  '&.btn-customer.active': {
    background: '#fff',
    zIndex: 10,
    borderRight: 'none',
    borderBottom: 'none',
    borderBottomLeftRadius: 0,
  },
  '&.btn-seller.active': {
    background: '#fff',
    zIndex: 10,
    borderLeft: 'none',
    borderBottom: 'none',
    borderBottomRightRadius: 0,
  },
});

const spanStyles = css({
  position: 'relative',
  top: '-20px',
  display: 'block',
});
