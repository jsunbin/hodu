/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ProductTableTitle from './ProductTableTitle';
import ProductTbody from './ProductTbody';

export default function ProductTable({ page = 'cart', isCheckBox = true }) {
  return (
    <table css={tableStyles({ page })} className={`${page}-table`}>
      <ProductTableTitle page={page} isCheckBox={isCheckBox} />
      <ProductTbody page={page} />
    </table>
  );
}

const tableStyles = props => css`
  width: 1280px;
  text-align: center;
  border-collapse: separate;
  border-spacing: ${props.page === 'cart' ? '0 35px' : '0 16px'};
`;
