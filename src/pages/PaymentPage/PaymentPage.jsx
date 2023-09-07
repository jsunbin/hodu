/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import ProductTable from '../../components/Product/ProductTable/ProductTable';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo';
import PayMethod from '../../components/PayMethod/PayMethod';
import FinalPaymentInfo from '../../components/FinalPaymentInfo/FinalPaymentInfo';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoginSelector, TokenAtom } from '../../recoil/TokenAtom';
import { isUserSeller } from '../../recoil/LoginAtom';
import {
  orderItemAtom,
  sumOrderTotalPriceSelector,
} from '../../recoil/OrderAtom';

export default function PaymentPage() {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(TokenAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const isSeller = useRecoilValue(isUserSeller);
  const [orderItems, setOrderItems] = useRecoilState(orderItemAtom);

  return (
    <>
      <Header isLogin={isLogin} isSeller={isSeller} />
      <main>
        <h2 css={h2Styles}>주문/결제하기</h2>
        <div css={contentDivStyles}>
          <ProductTable page="order" />
          <div css={totalOrderPriceStyles}>
            총 주문금액 <strong>{orderItems.price.toLocaleString()}원</strong>
          </div>
          <form css={formStyles}>
            <div css={deliveryInfoWrapDivStyles}>
              <DeliveryInfo />
            </div>
            <div css={payWrapDivStyles}>
              <PayMethod />
              <FinalPaymentInfo />
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

const formStyles = css`
  width: 1280px;
`;

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
