/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import LogoImg from '../../../assets/images/Logo-hodu.svg';

const logoStyles = css({
  width: '124px',
  '& a': {
    display: 'block',
    width: '100%',
    '& img': {
      display: 'block',
      width: '100%',
      height: '38px',
    },
  },
});

export default function LogoSection() {
  return (
    <h1 css={logoStyles}>
      <a href="/#">
        <img src={LogoImg} alt="호두" />
      </a>
    </h1>
  );
}
