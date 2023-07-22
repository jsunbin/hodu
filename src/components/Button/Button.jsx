/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function Button({
  children,
  size = 'lg',
  type = 'button',
  className,
  disabled = false,
  color = 'default',
}) {
  console.log(disabled);
  const buttonStyles = [commonStyles, sizeStyles[size], colorStyles[color]];
  return (
    <button css={buttonStyles} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

const commonStyles = css({
  cursor: 'pointer',
  border: 'none',
  color: 'inherit',
  textAlign: 'center',
  fontFamily: 'Spoqa Han Sans Neo',
  boxSizing: 'border-box',
  borderRadius: '5px',
  margin: 0,
  padding: 0,
});

const sizeStyles = {
  sm: {
    width: '80px',
    height: '40px',
    background: '#21bf48',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
  },
  ms: {
    width: '166px',
    height: '54px',
    background: '#21bf48',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
  },
  md: {
    width: '480px',
    height: '60px',
    background: '#21bf48',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '700',
    '&:disabled': {
      background: '#c4c4c4',
      cursor: 'unset',
    },
  },
  lg: {
    width: '220px',
    height: '68px',
    background: '#21bf48',
    color: '#fff',
    fontSize: '24px',
    fontWeight: '700',
    '&:disabled': {
      background: '#c4c4c4',
      cursor: 'unset',
    },
  },
};

const colorStyles = {
  default: {},
  white: {
    color: '#767676',
    border: '1px solid #c4c4c4',
    background: '#fff',
    '&:hover': {
      color: '#000',
      border: '1px solid #767676',
    },
  },
  dark: {
    background: '#767676',
  },
};
