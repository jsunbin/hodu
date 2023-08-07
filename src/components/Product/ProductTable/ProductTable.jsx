/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ProductTableTitle from './ProductTableTitle';
import ProductTableItemCart from './ProductTableItemCart';
import ProductTableItemPayment from './ProductTableItemPayment';

export default function ProductTable({ page = 'cart', isCheckBox = true }) {
  return (
    <table css={tableStyles({ page })} className={`${page}-table`}>
      <ProductTableTitle page={page} isCheckBox={isCheckBox} />
      <tbody css={tbodyStyles({ page })}>
        <tr css={trStyles({ page })}>
          {page === 'cart' ? (
            <td colSpan={5}>
              <ProductTableItemCart />
            </td>
          ) : (
            <ProductTableItemPayment />
          )}
        </tr>
      </tbody>
    </table>
  );
}

const tableStyles = props => css`
  width: 1280px;
  text-align: center;
  border-collapse: separate;
  border-spacing: ${props.page === 'cart' ? '0 35px' : '0 16px'};
`;

const tbodyStyles = props => css`
  border-collapse: separate;
  border-spacing: ${props.page === 'cart' ? '0 10px' : '0 16px'};
  td {
    vertical-align: middle;
  }
`;

const trStyles = props => css`
  position: relative;

  ${props.page === 'order' &&
  css`
    ::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #c4c4c4;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  `}
`;
