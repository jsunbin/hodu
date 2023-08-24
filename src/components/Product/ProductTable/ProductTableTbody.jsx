/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ProductTableItemCart from './ProductTableItemCart';
import ProductTableItemPayment from './ProductTableItemPayment';

export default function ProductTableTbody({
  page = 'cart',
  items,
  checkList,
  setCheckList,
}) {
  return page === 'cart' ? (
    <tbody css={tbodyStyles({ page })}>
      {items.map(item => (
        <tr css={trStyles({ page })} key={item.product_id}>
          <td colSpan={5}>
            <ProductTableItemCart
              item={item}
              checkList={checkList}
              setCheckList={setCheckList}
            />
          </td>
        </tr>
      ))}
    </tbody>
  ) : (
    <tbody css={tbodyStyles({ page })}>
      <tr css={trStyles({ page })}>
        <ProductTableItemPayment />
      </tr>
    </tbody>
  );
}

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
