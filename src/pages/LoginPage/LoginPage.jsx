/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import LogoHeader from '../../components/common/Header/LogoHeader/LogoHeader';
import FormOption from '../../components/FormOption/FormOption';
import LoginForm from '../../components/LoginForm/LoginForm';
import MoreList from '../../components/MoreList/MoreList';

export default function LoginPage() {
  const [isSeller, setIsSeller] = useState(false);

  return (
    <>
      <LogoHeader />
      <main>
        <div css={divStyles} className="login-wrapper">
          <FormOption defaultOption={isSeller} setIsSeller={setIsSeller} />
          <LoginForm isSeller={isSeller} />
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
