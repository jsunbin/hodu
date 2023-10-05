/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { css } from '@emotion/react';
import { productsDetailAPI } from '../../api/productsAPI';
import { addCartAPI, cartListAPI } from '../../api/cartAPI';
import { isUserSeller } from '../../recoil/LoginAtom';
import { isLoginSelector, TokenAtom } from '../../recoil/TokenAtom';
import {
  closeModalSelector,
  modalStateAtom,
  openModalSelector,
} from '../../recoil/ModalAtom';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import Price from '../../components/Price/Price';
import Amount from '../../components/common/Amount/Amount';
import Button from '../../components/Button/Button';
import TabMenu from '../../components/TabMenu/TabMenu';
import Modal from '../../components/Modal/Modal';
import ConfirmModal from '../../components/Modal/ConfirmModal/ConfirmModal';
import DeliveryMethod from '../../components/DeliveryMethod/DeliveryMethod';
import { orderItemAtom } from '../../recoil/OrderAtom';

export default function ProductDetailsPage() {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(TokenAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const isSeller = useRecoilValue(isUserSeller);
  const modalState = useRecoilValue(modalStateAtom);
  const setOpenModal = useSetRecoilState(openModalSelector);
  const setCloseModal = useSetRecoilState(closeModalSelector);
  const [item, setItem] = useState([]);
  const [price, setPrice] = useState('0');
  const [amount, setAmount] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState('택배배송');
  const [deliveryFee, setDeliveryFee] = useState('무료배송');
  const [isItemInCart, setIsItemInCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const productId = window.location.pathname.replace('/product/', '');

  const handleCartClick = async () => {
    const data = await getCartList(accessToken);
    console.log('ss:', data);

    const { results } = data.data;

    console.log('results, ', results);
    console.log(productId);

    const isItemInResults = results.find(
      item => item.product_id === Number(productId),
    );

    if (isItemInResults) {
      setIsItemInCart(true);
      setOpenModal();
    } else {
      await addItemToCart().then(setIsItemInCart(false)).then(setOpenModal());
    }
  };

  const handleGoToCartClick = () => {
    setCloseModal();
    navigate('/cart');
  };

  const getProductsDetails = async productId => {
    try {
      setIsLoading(true);

      const data = await productsDetailAPI(productId);

      setItem(data.data);

      console.log('상세: ', data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // 바로구매 버튼 클릭 이벤트
  const [orderItems, setOrderItems] = useRecoilState(orderItemAtom);

  const handleOrderNowClick = () => {
    console.log(orderItems);
    console.log('바로구매');

    setOrderItems({
      totalPrice: price + item.shipping_fee,
      productPrice: price,
      deliveryFee: item.shipping_fee,
      items: [{ ...item, totalAmount: amount }],
    });
    console.log(orderItems);

    // 이미지, 수량, 판매사, 상품이름, 총 수량,배송비, 주문금액
    navigate('/payment');
  };

  // 장바구니 목록 가져오기
  const getCartList = async accessToken => {
    try {
      const data = await cartListAPI(accessToken);

      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // 장바구니에 담기
  const addItemToCart = async () => {
    try {
      setIsLoading(true);

      const data = await addCartAPI({
        accessToken,
        productId,
        amount,
        isAvailable: true,
      });

      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsDetails(productId);
  }, [productId]);

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

              <DeliveryMethod
                styles={deliveryOptionsSpanStyles}
                shippingMethod={item.shipping_method}
                shippingFee={item.shipping_fee}
              />

              {item.stock === 0 ? (
                <Button disabled width="630px">
                  품절
                </Button>
              ) : (
                <>
                  <Amount
                    amount={amount}
                    setAmount={setAmount}
                    max={item.stock}
                  />
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
                    <Button
                      size="md"
                      width="416px"
                      onClickEvent={handleOrderNowClick}
                    >
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
                </>
              )}
            </section>
          </section>
          <section css={productDetailsWrapStyles}>
            <TabMenu />
            <div className="menu-content"></div>
          </section>
          {modalState.isOpen &&
            (isItemInCart ? (
              <Modal yesOnClickEvent={handleGoToCartClick}>
                이미 장바구니에 있는 상품입니다.
                <br />
                장바구니로 이동하시겠습니까?
              </Modal>
            ) : (
              <ConfirmModal
                btnContent={'장바구니로 가기'}
                btnClickEvent={handleGoToCartClick}
              >
                장바구니에 상품이 담겼습니다
              </ConfirmModal>
            ))}
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
  position: relative;
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
