/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import LogoHeader from '../../components/common/Header/LogoHeader/LogoHeader';

export default function OrderCompletePage() {
  return (
    <>
      <LogoHeader />
      <main>
        <div css={divWrapStyles}>
          <span css={spanStyles}>주문이 완료되었습니다 :)</span>
          <Link to="/main" css={aStyles}>
            더 둘러보러 가기
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
