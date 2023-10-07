/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import Button from '../Button/Button';
import NumDropDown from '../NumDropDown/NumDropDown';
import CheckText from '../CheckText/CheckText';
import { accountsValid } from '../../api/signupAPI';
import { useRecoilValue } from 'recoil';
import checkOnIcon from '../../assets/images/icon-check-on.svg';
import checkOffIcon from '../../assets/images/icon-check-off.svg';

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
  const [passwordValidError, setPasswordValidError] = useState({
    message: null,
    color: 'default',
    isValid: false,
  });
  const [passwordError, setPasswordError] = useState({
    message: null,
    isSame: false,
  });

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

  const checkUserName = () => {
    // 아이디를 입력하지 않고 비밀번호를 입력한 경우
    if (values.username === '') {
      setUserNameMessage({ message: '필수 정보입니다.', color: '#EB5757' });
    }
  };

  const checkPassword = event => {
    // 비밀번호 유효성 검사: 포커스 아웃 될 때 실행됨.
    const currentInputPassword1 = event.target.value;

    const reg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (currentInputPassword1 === '') {
      setPasswordValidError({
        color: 'red',
        message: '필수 정보입니다.',
        isValid: false,
      });
    } else if (!reg.test(currentInputPassword1)) {
      console.log('aa');
      setPasswordValidError(prev => ({
        color: 'red',
        message: '8자 이상, 영문 대소문자, 숫자, 특수문자를 사용하세요.',
        isValid: false,
      }));
    } else if (currentInputPassword1.length < 8) {
      setPasswordValidError({
        color: 'red',
        message: '8자 이상 입력하세요',
        isValid: false,
      });
    } else if (/\s/g.test(currentInputPassword1)) {
      setPasswordValidError({
        color: 'red',
        message: '공백을 제거하세요.',
        isValid: false,
      });
    } else {
      setPasswordValidError({
        message: null,
        color: 'default',
        isValid: true,
      });
    }
  };

  const confirmPassword = event => {
    handleInputChange(event);
    const currentInputPassword2 = event.target.value;

    // 비밀번호가 일치하지 않을 경우
    if (values.password !== currentInputPassword2) {
      setPasswordError({
        message: '비밀번호가 일치하지 않습니다.',
        isSame: false,
      });
    } else {
      // 비밀번호가 재확인 입력이 유효한 경우
      setPasswordError({ message: null, isSame: true });
    }

    // '비밀번호'를 입력하지 않고 '비밀번호 재확인'을 입력한 경우
    if (values.password === '') {
      setPasswordValidError({
        color: 'red',
        message: '필수 정보입니다.',
        isValid: false,
      });
    }
  };

  const checkPassword2 = () => {
    if (values.username === '') {
      setUserNameMessage({ message: '필수 정보입니다.', color: '#EB5757' });
    }

    if (values.password === '') {
      setPasswordValidError({
        color: 'red',
        message: '필수 정보입니다.',
        isValid: false,
      });
    }

    if (values.password2 === '') {
      setPasswordError({
        message: '필수 정보입니다.',
        isSame: false,
      });
    }
  };
  const idValidClickHandler = event => {
    console.log('이메일 계정 검증');
    var RegExp = /^[a-zA-Z0-9]{4,20}$/;

    if (values.username === '') {
      setUserNameMessage({ message: '필수 정보입니다.', color: '#EB5757' });
    } else if (!RegExp.test(values.username)) {
      setUserNameMessage({
        message: '4 ~ 20자 이내의 영문 소문자, 대문자 숫자만 사용 가능합니다.',
        color: '#EB5757',
      });
    } else {
      userIdValid();
    }
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
                onClick={checkUserName}
                onChange={handleInputChange}
                onBlur={checkPassword}
              />
              <span
                css={css`
                  position: absolute;
                  right: 13px;
                  bottom: 13px;
                  width: 28px;
                  height: 28px;
                  display: inline-block;
                  background: url(${passwordValidError.isValid
                      ? checkOnIcon
                      : checkOffIcon})
                    center no-repeat;
                `}
                className="password-filled"
              ></span>
            </div>
            {!passwordValidError.isValid && (
              <strong
                css={warningStyles({ color: '#EB5757' })}
                className="password-valid-error"
              >
                {passwordValidError.message}
              </strong>
            )}
            <div css={formItemDivStyles} className="form-item check-password">
              <label htmlFor="password2">비밀번호 재확인</label>
              <input
                type="password"
                id="password2"
                name="password2"
                maxLength={20}
                autoComplete="new-password"
                onChange={confirmPassword}
                onBlur={checkPassword2}
              />
              <span
                css={css`
                  position: absolute;
                  right: 13px;
                  bottom: 13px;
                  width: 28px;
                  height: 28px;
                  display: inline-block;
                  background: url(${passwordError.isSame
                      ? checkOnIcon
                      : checkOffIcon})
                    center no-repeat;
                `}
                className="password-filled"
              ></span>
            </div>
            {passwordError.message && (
              <strong
                css={warningStyles({ color: '#EB5757' })}
                className="password-error"
              >
                {passwordError.message}
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
  position: 'relative',
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
