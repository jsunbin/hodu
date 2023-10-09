/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import LogoHeader from '../../components/common/Header/LogoHeader/LogoHeader';
import Button from '../../components/Button/Button';

export default function WelcomePage(props) {
  const { name } = useParams();
  console.log(name);
  return (
    <>
      <LogoHeader />
      <main>
        <div css={divWrapStyles}>
          <div css={divTextStyles}>
            <strong css={strongStyles}>{name}</strong>님, 반갑습니다!
          </div>
          <span css={spanStyles}>회원가입이 완료되었습니다 :)</span>
          <Link to="/login" css={aStyles}>
            로그인
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

const divTextStyles = css`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 122.222% */
  margin-top: 100px;
`;
const strongStyles = css`
  font-size: 24px;
  font-weight: 700;
`;

const spanStyles = css`
  display: block;
  text-align: center;
  margin: 20px 0 60px;
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
