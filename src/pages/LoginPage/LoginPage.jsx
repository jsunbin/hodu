/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import LogoHeader from '../../components/common/Header/LogoHeader/LogoHeader';
import LoginType from '../../components/Login/LoginType';
import LoginForm from '../../components/LoginForm/LoginForm';
import MoreList from '../../components/MoreList/MoreList';

export default function LoginPage() {
  return (
    <>
      <LogoHeader />
      <main>
        <div css={divStyles} className="login-wrapper">
          <LoginType />
          <LoginForm />
          <MoreList />
        </div>
      </main>
    </>
  );
}

const divStyles = css({
  width: '550px',
  minHeight: '352px',
  margin: '0 auto',
});
