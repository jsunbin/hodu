/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { AllCheckedAtom } from '../../../recoil/AllCheckedAtom';
import { css } from '@emotion/react';

export default function ProductTableTitle({
  page = 'cart',
  isCheckBox = true,
  checkList,
  setCheckList,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const setIsAllCheckedR = useSetRecoilState(AllCheckedAtom);

  const handleCheckBoxClick = event => {
    event.preventDefault();
    setIsChecked(!isChecked);
    setIsAllCheckedR(!isChecked);

    const updatedCheckList = checkList.map(item => ({
      ...item,
      isChecked: !isChecked,
    }));

    setCheckList(updatedCheckList);
  };

  useEffect(() => {
    if (checkList.length !== 0) {
      const isAllChecked = checkList.every(item => item.isChecked);
      setIsChecked(isAllChecked);
    } else {
      setIsChecked(false);
    }
  }, [checkList]);

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
              checked={isChecked}
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
                {isChecked && <circle cx="10" cy="10" r="6" fill="#21BF48" />}
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
