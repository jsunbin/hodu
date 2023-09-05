/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function NoButtonModal() {
  return (
    <div css={modalDivStyles}>
      <div>수량이 변경되었습니다</div>
    </div>
  );
}

const modalDivStyles = css`
  position: absolute;
  bottom: -40px;
  width: 150px;
  /* height: 17px; */
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  vertical-align: top;
  background: #21bf48;
  div {
    font-size: 14px;
    line-height: normal;
    vertical-align: top;
  }
`;
