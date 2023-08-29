/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { AllCheckedAtom } from '../../../recoil/AllCheckedAtom';
import { CheckedItemAtom } from '../../../recoil/CheckedItemAtom';

export default function ProductTableTitle({
  page = 'cart',
  isCheckBox = true,
}) {
  const [isAllCheckedLocal, setIsAllCheckedLocal] = useState(false);
  const [isAllChecked, setIsAllChecked] = useRecoilState(AllCheckedAtom);
  const [checkedItem, setCheckedItem] = useRecoilState(CheckedItemAtom);

  const handleCheckBoxClick = event => {
    event.preventDefault();

    const updatedCheckList = checkedItem.map(item => ({
      ...item,
      isChecked: !isAllChecked,
    }));

    setCheckedItem(updatedCheckList);

    setIsAllChecked(!isAllChecked);
    setIsAllCheckedLocal(!isAllChecked);
  };

  useEffect(() => {
    if (checkedItem.every(v => v.isChecked) && checkedItem[0]?.price) {
      setIsAllChecked(true);
      setIsAllCheckedLocal(true);
    } else {
      setIsAllCheckedLocal(false);
    }
  }, [checkedItem]);

  const tabTitleList = {
    cart: {
      caption: '장바구니',
      colgroup: (
        <colgroup>
          <col width="80" />
          <col width="628" />
          <col width="auto" />
          <col width="246" />
          <col width="auto" />
        </colgroup>
      ),
      th: [
        isCheckBox && (
          <label>
            <input
              title="모든 상품을 결제상품으로 설정"
              type="checkbox"
              className="a11y-hidden"
              checked={isAllChecked}
              readOnly
            />
            <div css={allOrderSelectStyles} onClick={handleCheckBoxClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  stroke="#21BF48"
                  strokeWidth="2"
                />
                {isAllCheckedLocal && (
                  <circle cx="10" cy="10" r="6" fill="#21BF48" />
                )}
              </svg>
            </div>
          </label>
        ),
        '상품정보',
        '수량',
        '상품금액',
      ],
    },
    order: {
      caption: '주문내역',
      colgroup: (
        <colgroup>
          <col width="auto" />
        </colgroup>
      ),
      th: ['상품정보', '할인', '배송비', '주문금액'],
    },
  };

  return (
    <>
      <caption className="a11y-hidden">{tabTitleList[page].caption}</caption>
      {tabTitleList[page].colgroup && tabTitleList[page].colgroup}
      <thead>
        <tr css={headTrStyles}>
          {tabTitleList[page].th.map(item => {
            return item === '상품정보' ? (
              <th scope="colgroup" colSpan={2} key={item}>
                {item}
              </th>
            ) : (
              <th scope="col" key={item}>
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
}

const headTrStyles = css({
  th: {
    height: '60px',
    color: '#000',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '60px',
    background: '#f2f2f2',
    ':first-of-type': {
      borderRadius: '10px 0 0 10px',
    },
    ':last-child': {
      borderRadius: '0 10px 10px 0',
    },
  },
});

const allOrderSelectStyles = css({
  cursor: 'pointer',
  svg: {
    verticalAlign: 'middle',
  },
});
