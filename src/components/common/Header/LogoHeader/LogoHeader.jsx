/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import LogoImg from '../../../../assets/images/Logo-hodu.svg';

export default function LogoHeader() {
  return (
    <header css={headerStyles}>
      <h1 className="logo-title">
        <a href="/#">
          <img src={LogoImg} alt="호두" />
        </a>
      </h1>
    </header>
  );
}

const headerStyles = css({
  width: '100%',
  padding: '100px 0 90px',
  '& a': {
    display: 'block',
    width: '238px',
    margin: '0 auto',
  },
  '& .logo-title img': {
    display: 'block',
    width: '100%',
    height: '74px',
  },
});
