/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import Button from '../Button/Button';
import NumDropDown from '../NumDropDown/NumDropDown';
import CheckText from '../CheckText/CheckText';
import { accountsValid } from '../../api/signupAPI';
import { useRecoilValue } from 'recoil';

const INITIAL_VALUES = {
  username: '',
  password: '',
  password2: '',
  phone_number: '',
  name: '',
};

export default function JoinForm({ isSeller }) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [firstPhoneNum, setFirstPhoneNum] = useState('010');
  const [isClicked, setIsClicked] = useState(false);
  const [userNameMessage, setUserNameMessage] = useState({
    message: null,
    color: 'default',
  });
  const [passwordError, setPasswordError] = useState(null);

  const phoneNumClickHandler = () => {
    setIsClicked(!isClicked);
  };

  const handleChange = (name, value) => {
    setValues(prevValues => ({ ...prevValues, [name]: value }));
    console.log(values);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    handleChange(name, value);
  };

  const idValidClickHandler = event => {
    console.log('이메일 계정 검증');
    userIdValid();
  };

  const userIdValid = async () => {
    try {
      const response = await accountsValid(values.username);
      console.log(response);
      setUserNameMessage({ message: response.Success, color: 'default' });
    } catch (e) {
      // console.error(e);
      const failMessage = e.response?.data?.FAIL_Message;
      setUserNameMessage({ message: failMessage, color: '#EB5757' });
    }
  };

  return (
    <>
      <form>
        <section css={formStyles} className="form-content">
          <div
            css={formListDivStyles({ marginTop: '0' })}
            className="form-list"
          >
            <div css={formItemDivStyles} className="form-item user">
              <div css={idInputStyles}>
                <label htmlFor="id">아이디</label>
                <input
                  type="text"
                  id="userName"
                  name="username"
                  maxLength={20}
                  autoCapitalize="off"
                  onChange={handleInputChange}
                />
              </div>
              <Button size="ms" onClickEvent={idValidClickHandler}>
                중복확인
              </Button>
            </div>
            {userNameMessage.message && (
              <strong css={warningStyles({ color: userNameMessage.color })}>
                {userNameMessage.message}
              </strong>
            )}
            <div css={formItemDivStyles} className="form-item password">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                maxLength={20}
                autoComplete="new-password"
              />
              <span className="password-filled"></span>
            </div>
            <div css={formItemDivStyles} className="form-item check-password">
              <label htmlFor="password">비밀번호 재확인</label>
              <input
                type="password"
                id="password"
                name="password"
                maxLength={20}
                autoComplete="new-password"
              />
              {/*<span className="password-filled"></span>*/}
            </div>
            {passwordError && (
              <strong css={warningStyles} className="password-error">
                멋진 아이디네요 :)
              </strong>
            )}
          </div>
          <div css={formListDivStyles} className="form-list">
            <div
              css={formItemDivStyles}
              className="form-item name"
              id="divName"
            >
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" maxLength={40} />
            </div>
            <div
              css={formItemDivStyles}
              className="form-item phone"
              id="divPhoneNo"
            >
              <h4>휴대폰번호</h4>
              <div css={phoneInputStyles} className="phone-input-wrap">
                <button
                  type="button"
                  className="btn-phone-start"
                  aria-controls="phoneStart"
                  aria-expanded={false}
                  onClick={phoneNumClickHandler}
                  css={css`
                    position: relative;
                  `}
                >
                  <span>{firstPhoneNum}</span>
                  <span
                    css={css`
                      position: absolute;
                      top: 16px;
                      right: 14px;
                    `}
                  >
                    {!isClicked ? (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.4163 8.25005L10.9997 13.6583L4.58301 8.25005"
                          stroke="#767676"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58366 13.6583L11.0003 8.25006L17.417 13.6583"
                          stroke="#767676"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {isClicked && (
                  <NumDropDown
                    onClick={setFirstPhoneNum}
                    setIsClicked={setIsClicked}
                  />
                )}
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  className="phone-input"
                  maxLength={4}
                />
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  className="phone-input"
                  maxLength={4}
                />
              </div>
            </div>
          </div>

          {isSeller && (
            <div css={formListDivStyles} className="form-list">
              <div css={formItemDivStyles} className="form-item business">
                <div css={idInputStyles}>
                  <label htmlFor="businessId">사업자 등록번호</label>
                  <input
                    type="number"
                    id="businessId"
                    name="businessId"
                    className="business-id"
                    maxLength={10}
                  />
                </div>
                <Button size="ms">인증</Button>
              </div>
              <div css={formItemDivStyles} className="form-item store-name">
                <label htmlFor="password">스토어 이름</label>
                <input
                  type="text"
                  id="storeName"
                  name="storeName"
                  maxLength={20}
                />
              </div>
            </div>
          )}
        </section>

        <CheckText>
          호두샵의 <a href="/#">이용약관</a> 및{' '}
          <a href="/#">개인정보처리방침</a>에 대한 내용을 확인하였고 동의합니다.
        </CheckText>

        <div css={btnWrapDivStyles} className="btn-submit-wrap">
          <Button size="md" type="submit" disabled={true}>
            가입하기
          </Button>
        </div>
      </form>
    </>
  );
}

const warningStyles = props => css`
  display: block;
  color: ${props.color === 'default' ? '#21BF48' : props.color};
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;
`;

const formStyles = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '550px',
  minHeight: '586px',
  padding: '35px',
  marginBottom: '34px',
  borderRadius: '10px',
  background: '#fff',
  position: 'relative',
  border: '1px solid #c4c4c4',
});

// div.form-list
const formListDivStyles = props => css`
  margin-top: ${props.marginTop || '50px'};

  label {
    display: block;
    color: #767676;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
  }

  h4 {
    display: block;
    color: #767676;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
  }

  input {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 54px;
    color: #000;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    vertical-align: baseline;
    padding: 17px 16px;
    border-radius: 5px;
    border: 1px solid #c4c4c4;
  }
`;

// div.form-item
const formItemDivStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '12px',
  '&.user, &.business': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '12px',
  },
});

// 아이디 입력
const idInputStyles = css({
  display: 'flex',
  width: '346px',
  flexDirection: 'column',
  gap: '10px',
});

const phoneInputStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  '.btn-phone-start': {
    width: '152px',
    background: 'none',
    borderRadius: '5px',
    border: '1px solid #c4c4c4',
    '&:focus': {
      border: '1px solid #21bf48',
    },
  },
  '.phone-input': {
    width: '152px',
  },
});

// 가입하기 버튼
const btnWrapDivStyles = css({
  width: '480px',
  margin: '34px auto',
});
