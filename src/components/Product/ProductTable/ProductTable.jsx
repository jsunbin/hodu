/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ProductTableTitle from './ProductTableTitle';
import ProductTbody from './ProductTbody';
import { useRecoilValue } from 'recoil';
import { CartItemAtom } from '../../../recoil/CartItemAtom';
import { orderItemAtom } from '../../../recoil/OrderAtom';

export default function ProductTable({ page = 'cart', isCheckBox = true }) {
  const items = useRecoilValue(CartItemAtom);
  const orderItems = useRecoilValue(orderItemAtom);

  const orderItemList = page === 'cart' ? items : orderItems.items;

  return (
    <table css={tableStyles({ page })} className={`${page}-table`}>
      <ProductTableTitle page={page} isCheckBox={isCheckBox} />

      {orderItemList.length !== 0 ? (
        <ProductTbody page={page} items={orderItemList} />
      ) : (
        <tbody>
          <tr>
            <td colSpan={5}>
              <div css={noItemDivStyles}>
                <strong css={strongStyles}>
                  장바구니에 담긴 상품이 없습니다.
                </strong>
                <span css={noItemSpanStyles}>
                  원하는 상품을 장바구니에 담아보세요!
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
}

const tableStyles = props => css`
  width: 1280px;
  text-align: center;
  border-collapse: separate;
  border-spacing: ${props.page === 'cart' ? '0 35px' : '0 16px'};
`;

const noItemDivStyles = css`
  width: 100%;
  height: 50vh;
`;

const strongStyles = css`
  display: block;
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const noItemSpanStyles = css`
  display: block;
  color: var(--767676, #767676);
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;
`;
