/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import ProductTable from '../../components/Product/ProductTable/ProductTable';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo';
import PayMethod from '../../components/PayMethod/PayMethod';
import FinalPaymentInfo from '../../components/FinalPaymentInfo/FinalPaymentInfo';

export default function PaymentPage() {
  return (
    <>
      <Header />
      <main>
        <h2 css={h2Styles}>주문/결제하기</h2>
        <div css={contentDivStyles}>
          <ProductTable page="order" />
          <div css={totalOrderPriceStyles}>
            총 주문금액 <strong>46,500원</strong>
          </div>
          <div css={deliveryInfoWrapDivStyles}>
            <DeliveryInfo />
          </div>
          <div css={payWrapDivStyles}>
            <PayMethod />
            <FinalPaymentInfo />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const contentDivStyles = css`
  max-width: 1280px;
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

const totalOrderPriceStyles = css`
  color: #000;
  text-align: right;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 35px;
  strong {
    color: var(--red, #eb5757);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 10px;
  }
`;

const deliveryInfoWrapDivStyles = css`
  margin: 98px 0 70px;
`;

const payWrapDivStyles = css`
  display: flex;
  gap: 40px;
  margin: 70px 0 358px;
`;
