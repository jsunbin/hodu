/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function TabButton({
  children,
  type = 'button',
  disabled = false,
}) {
  const tabButtonStyles = [commonStyles, buttonStyles];
  return (
    <button
      css={tabButtonStyles}
      type={type}
      className="btn-tab"
      disabled={disabled}
    >
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
  margin: 0,
  padding: 0,
});

const buttonStyles = css({
  position: 'relative',
  width: '320px',
  height: '60px',
  background: '#fff',
  color: '#21bf48',
  fontSize: '18px',
  fontWeight: '700',
  '&:disabled': {
    color: '#767676',
    fontWeight: '500',
    '&::after': { background: '#e0e0e0' },
  },
  '&::after': {
    content: "''",
    display: 'block',
    width: '100%',
    height: '6px',
    background: '#21bf48',
    position: 'absolute',
    bottom: '0',
    left: '0',
  },
});
