/** @jsxImportSource @emotion/react */
import React, { Children } from 'react';
import { css } from '@emotion/react';

function Sticker({ children }) {
  return (
    <span css={stickerStyles} className="sticker">
      {children}
    </span>
  );
}
const stickerStyles = {
  backgroundColor: '#eb5757',
  width: '20px',
  height: '20px',
  color: '#fff',
  display: 'inline-block',
  borderRadius: '50%',
  fontSize: '12px',
  lineHeight: '22px',
  textAlign: 'center',
  letterSpacing: '-0.2px',
};

export default function SideMenuItem({
  children,
  type = 'button',
  state = false,
  stickerContent = null,
}) {
  const sideMenuItemStyles = [
    commonStyles,
    buttonStyles,
    buttonHoverStyle[!state],
    buttonOnStyles[state],
  ];

  console.log(buttonHoverStyle[state]);

  const numericStickerContent = parseInt(stickerContent);
  const isNumber =
    typeof numericStickerContent === 'number' && !isNaN(numericStickerContent);

  return (
    <button type={type} css={sideMenuItemStyles}>
      <span>{children}</span>
      {stickerContent && isNumber && <Sticker>{numericStickerContent}</Sticker>}
    </button>
  );
}

const commonStyles = css({
  cursor: 'pointer',
  border: 'none',
  color: 'inherit',
  fontFamily: 'Spoqa Han Sans Neo',
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

const buttonStyles = css({
  display: 'flex',
  width: '250px',
  height: ' 50px',
  justifyContent: 'space-between',
  borderRadius: '5px',
  color: '#000',
  textAlign: 'left',
  fontSize: '16px',
  fontWeight: '500',
  background: '#fff',
  padding: '15px 10px',
});

const buttonHoverStyle = {
  flase: {},
  true: {
    '&:hover': {
      background: '#effff3',
    },
  },
};

const buttonOnStyles = {
  false: {},
  true: {
    color: '#fff',
    background: '#21bf48',
    '&:hover': {},
  },
};
