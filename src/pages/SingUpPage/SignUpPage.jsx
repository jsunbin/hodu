/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import LogoHeader from '../../components/common/Header/LogoHeader/LogoHeader';
import JoinForm from '../../components/JoinForm/JoinForm';
import FormOption from '../../components/FormOption/FormOption';

export default function SignUpPage() {
  const [isSeller, setIsSeller] = useState(false);

  return (
    <>
      <LogoHeader />
      <main>
        <div css={divStyles} className="signup-wrapper">
          <FormOption
            type="join"
            defaultOption={isSeller}
            setIsSeller={setIsSeller}
          />
          <JoinForm isSeller={isSeller} />
        </div>
      </main>
    </>
  );
}

const divStyles = css({
  width: '550px',
  minHeight: '352px',
  margin: '0 auto 100px',
});
