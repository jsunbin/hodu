/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import LogoImg from '../../../assets/images/Logo-hodu.svg';

export default function SellerHeader() {
  return (
    <header css={headerStyles}>
      <h1 css={h1Styles}>
        <Link to={'/'}>
          <img css={logoImgStyles} src={LogoImg} alt={'호두'} />
        </Link>
        <Link to={'/seller-center'}>판매자 센터</Link>
      </h1>
    </header>
  );
}

const headerStyles = css`
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 26px 100px;
`;

const h1Styles = css`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const logoImgStyles = css`
  display: inline-block;
  width: 80px;
  height: 24px;
`;
