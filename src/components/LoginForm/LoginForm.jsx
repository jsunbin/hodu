/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Button from '../Button/Button';
import { loginAPI } from '../../api/login';

export default function LoginForm({ isSeller }) {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [userType, setUserType] = useState('');
  const [loginError, setLoginError] = useState('');

  // 아이디, 비밀번호 데이터 관리
  const handleData = event => {
    if (event.target.id === 'userID') {
      setId(event.target.value);
    } else if (event.target.id === 'userPW') {
      setPassword(event.target.value);
    }
  };

  // 로그인 버튼 클릭 이벤트
  const handleSubmit = async event => {
    event.preventDefault();
    console.log(id, password);
    await login({ id, password, isSeller });
  };

  // 로그인
  const login = async props => {
    try {
      const data = await loginAPI(props);

      const newToken = data.data.token;
      const newUserType = data.data.user_type;
      setToken(newToken);
      setUserType(newUserType);
      localStorage.setItem('token', newToken);
      localStorage.setItem('id', id);
      localStorage.setItem('userType', newUserType);

      navigate('/');
    } catch (error) {
      if (error.response.status === 401) {
        const errorMessage = error.response.data?.FAIL_Message;

        if (errorMessage) {
          setLoginError('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      } else {
        console.error(error);
      }
    }
  };

  return (
    <>
      <form css={formStyles} className="form-login" onSubmit={handleSubmit}>
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
              onChange={handleData}
              value={id}
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
              onChange={handleData}
              value={password}
            />
          </div>

          <strong
            css={warningStyles({ loginError: loginError })}
            className="login-warning"
          >
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

const warningStyles = props => css`
  display: ${props.loginError === '' ? 'none' : 'block'};
  color: #eb5757;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 500;
  margin: 26px 0;
`;

const idWrapperStyles = css({
  marginBottom: '6px',
});
