/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { css } from '@emotion/react';
import { loginAPI } from '../../api/loginAPI';
import { TokenAtom } from '../../recoil/TokenAtom';
import { userLoginTypeAtom } from '../../recoil/LoginAtom';
import Button from '../Button/Button';

export default function LoginForm({ isSeller }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const idInputRef = React.createRef();
  const passwordInputRef = React.createRef();
  const setAccessToken = useSetRecoilState(TokenAtom);
  const setUserLoginType = useSetRecoilState(userLoginTypeAtom);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const from = location?.state?.redirectedFrom?.pathname || '/';

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

    // 아이디 입력칸이 공란인 경우 (아이디, 비밀번호 모두 입력하지 않은 경우 or 비밀번호만 입력한 경우)
    if (id === '') {
      setLoginError('아이디를 입력해주세요');
      idInputRef.current.focus();
    } else if (password === '') {
      setLoginError('비밀번호를 입력해주세요');
      passwordInputRef.current.focus();
    } else {
      await login({ id, password, isSeller });
    }
  };

  // 로그인
  const login = async props => {
    try {
      const data = await loginAPI(props);
      setAccessToken(data.data.token);
      setUserLoginType(data.data.user_type === 'SELLER' ? true : false);

      navigate(from);
    } catch (error) {
      if (error.response.status === 401) {
        const errorMessage = error.response.data?.FAIL_Message;

        if (errorMessage) {
          setLoginError('아이디 또는 비밀번호가 일치하지 않습니다.');
          passwordInputRef.current.focus();
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
              // required
              onChange={handleData}
              value={id}
              ref={idInputRef}
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
              // required
              onChange={handleData}
              value={password}
              ref={passwordInputRef}
            />
          </div>

          <strong
            css={warningStyles({ loginError: loginError })}
            className="login-warning"
          >
            {loginError}
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
