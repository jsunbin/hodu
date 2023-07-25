/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import LogoHeader from '../../components/common/Header/LogoHeader';
import LoginType from '../../components/Login/LoginType';
import LoginForm from '../../components/LoginForm/LoginForm';
import LoginMore from '../../components/Login/LoginMore';

export default function LoginPage() {
  return (
    <>
      <LogoHeader />
      <main>
        <div css={divStyles} className="login-wrapper">
          <LoginType />
          <LoginForm />
          <LoginMore />
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
