/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from '../Button/Button';

export default function LoginForm() {
  return (
    <>
      <form css={formStyles} className="form-login">
        <section className="input-wrapper">
          <div css={(divStyles, idWrapperStyles)} className="input-id-wrapper">
            <label className="a11y-hidden" htmlFor="userID">
              아이디
            </label>
            <input
              id="userID"
              type="text"
              placeholder="아이디"
              autoComplete="username"
              required
            />
          </div>
          <div css={divStyles} className="input-password-wrapper">
            <label className="a11y-hidden" htmlFor="userPW">
              비밀번호
            </label>
            <input
              id="userPW"
              type="password"
              placeholder="비밀번호"
              autoComplete="current-password"
              required
            />
          </div>

          <strong css={warningStyles} className="login-warning">
            아이디 또는 비밀번호가 일치하지 않습니다.
          </strong>
        </section>

        <Button size="md" type="submit" disabled={false}>
          로그인
        </Button>
      </form>
    </>
  );
}

const formStyles = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '550px',
  minHeight: '292px',
  padding: '35px',
  borderRadius: '10px',
  background: '#fff',
  position: 'relative',
  border: '1px solid #c4c4c4',
  '& input': {
    width: '100%',
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid #c4c4c4',
    padding: '20px 0',
    '&::placeholder': {
      lineHeight: '20px',
    },
  },
});

const divStyles = css({
  width: '480px',
  color: '#000',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '16px',
  fontWeight: '500',
});

const warningStyles = css({
  display: 'block',
  color: '#eb5757',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '16px',
  fontWeight: '500',
  margin: '26px 0',
  display: 'none',
});

const idWrapperStyles = css({
  marginBottom: '6px',
});
