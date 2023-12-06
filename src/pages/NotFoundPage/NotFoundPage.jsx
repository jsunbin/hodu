/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import LogoHeader from '../../components/common/Header/LogoHeader/LogoHeader';

export default function NotFoundPage() {
  return (
    <>
      <LogoHeader />
      <main>
        <div css={divWrapStyles}>
          <span css={spanStyles}>페이지가 존재하지 않습니다 :(</span>
          <Link to="/" css={aStyles}>
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </>
  );
}

const divWrapStyles = css`
  width: 550px;
  height: 320px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin: 0 auto;
`;

const spanStyles = css`
  display: block;
  text-align: center;
  margin: 100px 0 60px;
`;

const aStyles = css`
  display: block;
  width: 166px;
  height: 40px;
  line-height: 40px;
  background: #21bf48;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 auto;
`;
