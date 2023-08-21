/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  size = 'lg',
  type = 'button',
  className,
  color = 'default',
  disabled = false,
  icon = false,
  href,
  width,
  onClickEvent,
}) {
  const buttonStyles = [
    commonStyles,
    sizeStyles[size],
    iconStyles[icon],
    colorStyles[color],
    css({ width: width }),
  ];
  return !href ? (
    <button
      css={buttonStyles}
      type={type}
      disabled={disabled}
      onClick={onClickEvent}
    >
      {children}
    </button>
  ) : (
    <Link css={buttonStyles} to={href}>
      {children}
    </Link>
  );
}

const commonStyles = css({
  display: 'inline-block',
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
    minWidth: '80px',
    height: '40px',
    lineHeight: '40px',
    background: '#21bf48',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    // padding: '10px 25px',
  },
  ms: {
    width: '166px',
    height: '54px',
    lineHeight: '54px',
    background: '#21bf48',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
  },
  md: {
    width: '480px',
    height: '60px',
    lineHeight: '60px',
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
    lineHeight: '68px',
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

const iconStyles = {
  true: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
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
