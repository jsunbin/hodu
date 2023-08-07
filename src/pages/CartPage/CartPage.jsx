/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Header from '../../components/common/Header/Header';
import ProductTable from '../../components/Product/ProductTable/ProductTable';
import OrderTotalBox from '../../components/OrderTotalBox/OrderTotalBox';
import Button from '../../components/Button/Button';
import Footer from '../../components/common/Footer/Footer';

export default function CartPage() {
  return (
    <>
      <Header />
      <main>
        <div css={contentDivStyles}>
          <h2 css={h2Styles}>장바구니</h2>
          <ProductTable />
          <OrderTotalBox />
          <div css={buttonWrapDivStyles}>
            <Button size="lg">주문하기</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const contentDivStyles = css`
  max-width: 1280px;
  text-align: center;
  margin: 0 auto;
`;

const h2Styles = css`
  text-align: center;
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  margin: 54px 0 17px;
`;

const buttonWrapDivStyles = css`
  margin: 40px 0 160px;
`;
