/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import checkIcon from '../../assets/images/check-box.svg';
import checkFillIcon from '../../assets/images/check-fill-box.svg';

export default function CheckText() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChage = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <div css={divStyles} className="check-text">
      <input
        css={inputStyles}
        type="checkbox"
        id="agreeAll"
        className="a11y-hidden"
        checked={isChecked}
      />
      <label htmlFor="agreeAll" onClick={handleCheckBoxChage}>
        <p css={pStyles} className="text">
          호두샵의 <a href="/#">이용약관</a> 및{' '}
          <a href="/#">개인정보처리방침</a>에 대한 내용을 확인하였고 동의합니다.
        </p>
      </label>
    </div>
  );
}

const divStyles = css({
  width: '480px',
  position: 'relative',
  margin: '34px auto 0',
});

const inputStyles = css({
  '&+label': {
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: '16px',
      height: '16px',
      cursor: 'pointer',
      background: `url(${checkIcon}) no-repeat center`,
      position: 'absolute',
      top: '2px',
      left: '0',
    },
  },
  '&:checked': {
    '&+label': {
      '&::before': {
        background: `url(${checkFillIcon}) no-repeat center`,
      },
    },
  },
});

const pStyles = css({
  color: '#c4c4c4',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  paddingLeft: '26px',
  a: {
    color: '#767676',
    fontWeight: '700',
    fontSize: '16px',
    textDecoration: 'underline',
  },
});
