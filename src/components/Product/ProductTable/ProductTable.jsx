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
      <ProductTableTbody
        items={items}
        checkList={checkList}
        setCheckList={setCheckList}
      />
    </table>
  );
}

const tableStyles = props => css`
  width: 1280px;
  text-align: center;
  border-collapse: separate;
  border-spacing: ${props.page === 'cart' ? '0 35px' : '0 16px'};
`;
