/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function LoginMore() {
  return (
    <ul css={listStyles}>
      <li>
        <a href="/#">회원가입</a>
      </li>
      <li>
        <a href="/#">비밀번호 찾기</a>
      </li>
    </ul>
  );
}

const listStyles = css({
  color: '#333',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '16px',
  fontWeight: '400',
  textAlign: 'center',
  margin: '30px 0 315px',
  '& li': {
    display: 'inline-block',
    lineHeight: '23px',
    '&:not(:last-child)::after': {
      content: '"|"',
      display: 'inline-block',
      width: '5px',
      margin: '0 14px',
    },
  },
});
