/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function LoginType() {
  return (
    <ul css={listStyles} className="login-type">
      <li>
        <button css={btnStyles} className="btn-customer active">
          <span css={spanStyles}>구매회원 로그인</span>
        </button>
      </li>
      <li>
        <button css={btnStyles} className="btn-seller">
          <span css={spanStyles}>판매회원 로그인</span>
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
  '&.active': {
    background: '#fff',
    zIndex: 10,
    borderRight: 'none',
    borderBottom: 'none',
    borderBottomLeftRadius: 0,
  },
});

const spanStyles = css({
  position: 'relative',
  top: '-20px',
  display: 'block',
});
