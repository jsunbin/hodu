/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import checkIcon from '../../assets/images/check-box.svg';
import checkFillIcon from '../../assets/images/check-fill-box.svg';

export default function CheckText({ children, color = '#000', setIsDisabled }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChage = () => {
    setIsChecked(!isChecked);
    setIsDisabled(isChecked);
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
        readOnly
      />
      <label htmlFor="agreeAll" onClick={handleCheckBoxChage}>
        <p css={pStyles({ color })} className="text">
          {children}
        </p>
      </label>
    </div>
  );
}

const divStyles = css({
  maxWidth: '454px',
  position: 'relative',
  margin: '0 auto',
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

const pStyles = props => css`
  color: ${props.color};
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  padding-left: 26px;
  a {
    color: #767676;
    font-weight: 700;
    font-size: 16px;
    text-decoration: underline;
  }
`;

// const pStyles = css({
//   color: '#c4c4c4',
//   fontFamily: 'Spoqa Han Sans Neo',
//   fontSize: '16px',
//   fontWeight: '400',
//   lineHeight: '20px',
//   paddingLeft: '26px',
//   a: {
//     color: '#767676',
//     fontWeight: '700',
//     fontSize: '16px',
//     textDecoration: 'underline',
//   },
// });
