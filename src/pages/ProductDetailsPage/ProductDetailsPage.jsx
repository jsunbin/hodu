/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import Price from '../../components/Price/Price';
import Amount from '../../components/common/Amount/Amount';
import Button from '../../components/Button/Button';
import TabButton from '../../components/Button/TabButton';

export default function ProductDetailsPage() {
  return (
    <>
      <Header />
      <main className="main">
        <section css={firstWrapDivStyles}>
          <section css={imgSectionStyles}>
            <img src="https://picsum.photos/600" alt="상품 이미지" />
          </section>
          <section>
            <div css={productBasicInfoDivStyles}>
              <span className="product-seller">백엔드 글로벌</span>
              <h3 className="product-name">딥러닝 개발자 무릎 담요</h3>
              <Price size="lg">17,500</Price>
            </div>

            <span css={deliveryOptionsSpanStyles}>택배배송 / 무료배송</span>
            <Amount />
            <div css={productTotalStyles}>
              <span className="title">총 상품 금액</span>
              <div css={orderDetailsStyles}>
                <span css={orderAmountStyles} className="order-amount">
                  총 수량 <strong>1</strong>개
                </span>
                <Price size="lg" color="#21BF48">
                  17,500
                </Price>
              </div>
            </div>
            <div css={btnGroupsStyles}>
              <Button size="md" width="416px">
                바로구매
              </Button>
              <Button size="md" color="dark" width="200px">
                장바구니
              </Button>
            </div>
          </section>
        </section>

        <section css={productDetailsWrapStyles}>
          <ul className="menu-list" role="menubar">
            <li role="presentation">
              <TabButton>상세정보</TabButton>
            </li>
            <li role="presentation">
              <TabButton disabled>리뷰</TabButton>
            </li>
            <li role="presentation">
              <TabButton disabled>Q&#38;A</TabButton>
            </li>
            <li role="presentation">
              <TabButton disabled>반품&#47;교환정보</TabButton>
            </li>
          </ul>
          <div className="menu-content"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const firstWrapDivStyles = css({
  display: 'flex',
  width: '1280px',
  justifyContent: 'flex-start',
  gap: '50px',
  margin: '80px 320px',
});

const imgSectionStyles = css({
  width: '600px',
  height: '600px',
  img: {
    width: '100%',
    height: '100%',
  },
});

const productBasicInfoDivStyles = css({
  fontFamily: 'Spoqa Han Sans Neo',
  fontWeight: '400',
  marginBottom: '138px',
  '.product-seller': {
    color: '#767676',
    fontSize: '18px',
  },
  '.product-name': {
    color: '#000',
    fontSize: '36px',
    margin: '16px 0 20px',
  },
});

const deliveryOptionsSpanStyles = css({
  display: 'block',
  color: '#767676',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '16px',
  fontWeight: '400',
  borderBottom: '2px solid #c4c4c4',
  paddingBottom: '20px',
  marginBottom: '30px',
});

const productTotalStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '2px solid #c4c4c4',
  paddingTop: '32px',
  margin: '30px 0 46px',
});

const orderDetailsStyles = css({
  display: 'flex',
  alignItems: 'center',
  color: '#767676',
  fontSize: '18px',
  fontWeight: '400',
});

const orderAmountStyles = css({
  strong: {
    color: '#21bf48',
    fontSize: '18px',
    fontWeight: '700',
  },
  '&::after': {
    content: '"|"',
    display: 'inline-block',
    width: '5px',
    height: '23px',
    margin: '0 11px',
  },
});

const btnGroupsStyles = css({
  display: 'flex',
  justifyContent: 'center',
  gap: '14px',
});

const productDetailsWrapStyles = css({
  maxWidth: '1280px',
  margin: '140px auto 360px',
  li: {
    float: 'left',
  },
});
