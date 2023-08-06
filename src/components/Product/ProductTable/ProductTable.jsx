/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import TabTitle from '../../TabTitle/TabTitle';

export default function ProductTable() {
  return (
    <table css={tableStyles} className="order-table">
      <TabTitle page="order" />
      <tbody css={tbodyStyles}>
        <tr>
          <td colSpan={2}>
            <div css={productInfoDivStyles}>
              <a href="/#">
                <img src="https://picsum.photos/104" alt="상품이미지" />
              </a>
              <div css={productBasicInfoDivStyles}>
                <span className="product-seller">백엔드 글로벌</span>
                <a href="/#">
                  <strong className="product-name">
                    딥러닝 개발자 무릎 담요
                  </strong>
                </a>
                <span className="product-amount">수량: 1개</span>
              </div>
            </div>
          </td>
          <td>
            <div css={tdDivStyles}>-</div>
          </td>
          <td>
            <div css={tdDivStyles}>무료배송</div>
          </td>
          <td>
            <div css={priceStyles}>17,500원</div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div css={productInfoDivStyles}>
              <a href="/#">
                <img src="https://picsum.photos/104" alt="상품이미지" />
              </a>
              <div css={productBasicInfoDivStyles}>
                <span className="product-seller">백엔드 글로벌</span>
                <a href="/#">
                  <strong className="product-name">
                    딥러닝 개발자 무릎 담요
                  </strong>
                </a>
                <span className="product-amount">수량: 1개</span>
              </div>
            </div>
          </td>
          <td>
            <div css={tdDivStyles}>-</div>
          </td>
          <td>
            <div css={tdDivStyles}>무료배송</div>
          </td>
          <td>
            <div css={priceStyles}>17,500원</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const tableStyles = css({
  width: '1280px',
  textAlign: 'center',
  // tableLayout: 'fixed',
  borderCollapse: 'separate',
  borderSpacing: '0 16px',
  margin: '100px auto',
});

const tbodyStyles = css({
  borderCollapse: 'separate',
  borderSpacing: '0 16px',
  tr: {
    position: 'relative',
    '::after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '1px',
      background: '#c4c4c4',
      position: 'absolute',
      bottom: '0',
      left: '0',
    },
  },
  td: {
    verticalAlign: 'middle',
  },
});

const productInfoDivStyles = css({
  display: 'flex',
  img: {
    width: '104px',
    height: '104px',
    borderRadius: '10px',
    margin: '8px 36px 18px 8px',
  },
});

const productBasicInfoDivStyles = css({
  fontFamily: 'Spoqa Han Sans Neo',
  fontWeight: '400',
  textAlign: 'left',
  marginTop: '20px',
  '.product-seller': {
    color: '#767676',
    fontSize: '14px',
    marginTop: '20px',
  },
  '.product-name': {
    display: 'block',
    color: '#000',
    fontSize: '18px',
    lineHeight: '22px',
    margin: '10px 0',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  '.product-amount': {
    color: '#767676',
    fontSize: '14px',
  },
});

const tdDivStyles = css({
  color: '#767676',
  fontSize: '18px',
  fontWeight: '400',
});

const priceStyles = css({
  color: '#000',
  fontSize: '18px',
  fontWeight: '700',
});
