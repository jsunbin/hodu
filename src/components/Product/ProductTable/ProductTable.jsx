/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import ProductTableTitle from './ProductTableTitle';
import ProductTableTbody from './ProductTableTbody';

export default function ProductTable({
  page = 'cart',
  isCheckBox = true,
  items,
}) {
  const [checkList, setCheckList] = useState([]);

  console.log(items);

  useEffect(() => {
    setCheckList(
      items.map(item => ({ id: item.product_id, isChecked: false })),
    );
  }, []);

  return (
    <table css={tableStyles({ page })} className={`${page}-table`}>
      <ProductTableTitle
        page={page}
        isCheckBox={isCheckBox}
        checkList={checkList}
        setCheckList={setCheckList}
      />
      {items.length !== 0 ? (
        <ProductTableTbody
          items={items}
          checkList={checkList}
          setCheckList={setCheckList}
        />
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

const tableStyles = props => css`
  width: 1280px;
  text-align: center;
  border-collapse: separate;
  border-spacing: ${props.page === 'cart' ? '0 35px' : '0 16px'};
`;
