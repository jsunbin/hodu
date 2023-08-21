/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function TabMenuItem({ children, isActive, onClickEvent }) {
  return (
    <button
      css={buttonStyles({ isActive: isActive })}
      type="button"
      onClick={onClickEvent}
    >
      {children}
    </button>
  );
}

const buttonStyles = props => css`
  cursor: pointer;
  border: none;
  color: inherit;
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  position: relative;
  width: 320px;
  height: 60px;
  background: #fff;
  color: ${props.isActive ? '#21bf48' : '#767676'};
  font-size: 18px;
  font-weight: ${props.isActive ? '700' : '500'};
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 6px;
    background: ${props.isActive ? '#21bf48' : '#e0e0e0'};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
