/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/react';
import { productsDetailAPI } from '../../api/productsAPI';
import { isUserSeller } from '../../recoil/LoginAtom';
import { isLoginSelector, TokenAtom } from '../../recoil/TokenAtom';
import { AmountAtom } from '../../recoil/AmountAtom';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import Price from '../../components/Price/Price';
import Amount from '../../components/common/Amount/Amount';
import Button from '../../components/Button/Button';
import TabMenu from '../../components/TabMenu/TabMenu';

export default function ProductDetailsPage() {
  const accessToken = useRecoilValue(TokenAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const isSeller = useRecoilValue(isUserSeller);
  const amount = useRecoilValue(AmountAtom);
  const [item, setItem] = useState([]);
  const [price, setPrice] = useState('0');
  const [deliveryMethod, setDeliveryMethod] = useState('택배배송');
  const [deliveryFee, setDeliveryFee] = useState('무료배송');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handleCartClick = () => {
    console.log('장바구니 담기');
    console.log('이동 확인 모달 띄우기');
  };

  const getProductsDetails = async productId => {
    try {
      setIsLoading(true);
      setLoadingError(null);

      const data = await productsDetailAPI(productId);

      setItem(data.data);

      console.log('상세: ', data);
    } catch (error) {
      setLoadingError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const productId = window.location.pathname.replace('/product/', '');

    getProductsDetails(productId);
  }, []);

  useEffect(() => {
    setPrice(item.price * amount);
  }, [item, amount]);

  useEffect(() => {
    setDeliveryMethod(item.shipping_method === 'PARCEL' ? 'EMS' : '택배배송');
    setDeliveryFee(item.shipping_fee === 0 ? '무료배송' : '2,500원');
  }, [item]);

  return (
    <>
      <Header isLogin={isLogin} isSeller={isSeller} />
      {!isLoading ? (
        <main css={mainStyles}>
          <section css={firstWrapDivStyles}>
            <section css={imgSectionStyles}>
              <img src={item.image} alt={item.product_name} />
            </section>
            <section>
              <div css={productBasicInfoDivStyles}>
                <span className="product-seller">{item.store_name}</span>
                <h3 className="product-name">{item.product_name}</h3>
                <Price size="lg">{item.price}</Price>
              </div>

              <span css={deliveryOptionsSpanStyles}>
                {deliveryMethod} / {deliveryFee}
              </span>
              <Amount max={3} />
              <div css={productTotalStyles}>
                <span className="title">총 상품 금액</span>
                <div css={orderDetailsStyles}>
                  <span css={orderAmountStyles} className="order-amount">
                    총 수량 <strong>{amount}</strong>개
                  </span>
                  <Price size="lg" color="#21BF48">
                    {price}
                  </Price>
                </div>
              </div>
              <div css={btnGroupsStyles}>
                <Button size="md" width="416px" href={'/payment'}>
                  바로구매
                </Button>
                <Button
                  size="md"
                  color="dark"
                  width="200px"
                  onClickEvent={handleCartClick}
                >
                  장바구니
                </Button>
              </div>
            </section>
          </section>
          <section css={productDetailsWrapStyles}>
            <TabMenu />
            <div className="menu-content"></div>
          </section>
        </main>
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
    </>
  );
}

const mainStyles = css`
  width: 100%;
  margin: 80px auto;
`;

const firstWrapDivStyles = css({
  display: 'flex',
  maxWidth: '1280px',
  justifyContent: 'flex-start',
  gap: '50px',
  // margin: '80px 320px',
  margin: '0 auto',
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
});
