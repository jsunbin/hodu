/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Header from '../../components/common/Header/Header';
import ProductTable from '../../components/Product/ProductTable/ProductTable';
import OrderTotalBox from '../../components/OrderTotalBox/OrderTotalBox';
import Button from '../../components/Button/Button';
import Footer from '../../components/common/Footer/Footer';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoginSelector, TokenAtom } from '../../recoil/TokenAtom';
import { isUserSeller } from '../../recoil/LoginAtom';
import { cartListAPI, deleteCartItemAPI } from '../../api/cartAPI';
import { CartItemAtom } from '../../recoil/CartItemAtom';
import { closeModalSelector, modalStateAtom } from '../../recoil/ModalAtom';
import Modal from '../../components/Modal/Modal';
import { cartItemIdToDeleteAtom } from '../../recoil/CartItemIdToDeleteAtom';
import { CheckedItemAtom } from '../../recoil/CheckedItemAtom';
import { cartOrderAPI } from '../../api/orderAPI';
import { useNavigate } from 'react-router-dom';
import { orderItemAtom } from '../../recoil/OrderAtom';
import { orderKindAtom } from '../../recoil/orderKindAtom';
import { productsDetailAPI } from '../../api/productsAPI';

export default function CartPage() {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(TokenAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const isSeller = useRecoilValue(isUserSeller);
  const cartItemIdToDelete = useRecoilValue(cartItemIdToDeleteAtom);
  const modalState = useRecoilValue(modalStateAtom);
  const setCloseModal = useSetRecoilState(closeModalSelector);
  const [checkedItem, setCheckedItem] = useRecoilState(CheckedItemAtom);

  const [items, setItems] = useRecoilState(CartItemAtom);
  const [isLoading, setIsLoading] = useState(false);

  const [orderItems, setOrderItems] = useRecoilState(orderItemAtom);
  const [orderKind, setOrderKind] = useRecoilState(orderKindAtom);

  // 하단 결제하기 클릭 이벤트
  const handleOrderClick = async event => {
    event.preventDefault();
    console.log('결제하기');
    console.log('-> items', items);
    // orderKind 설정
    setOrderKind('cart_order');

    // orderItem 아톰 설정
    // checkedItem에서 isChecked가 true인 값만 뽑아서
    console.log('-> checkedItem', checkedItem);

    for (let el of checkedItem) {
      if (el.isChecked) {
        // isChecked가 true 이면
        const details = await getProductsDetails(el.productId);
        console.log('dd', details);

        // setOrderItems({});

        setOrderItems(prev => {
          const currentProductId = details.product_id;

          const updatedItems = prev.items.filter(
            item => item.product_id !== currentProductId,
          );

          const newItems = [
            ...updatedItems,
            {
              ...details,
              totalAmount: el.amount,
            },
          ];
          console.log('-> newItems', newItems);

          const productPrice = newItems.reduce((total, item) => {
            return total + item.price * item.totalAmount;
          }, 0);
          const deliveryFee = newItems.reduce((total, item) => {
            return total + item.shipping_fee;
          }, 0);
          const totalPrice = productPrice + deliveryFee;

          console.log({
            totalPrice,
            productPrice,
            deliveryFee,
            items: newItems,
          });

          return {
            totalPrice,
            productPrice,
            deliveryFee,
            items: newItems,
          };
        });
      }
    }

    navigate('/payment');

    console.log(orderItems);
  };

  const getProductsDetails = async productId => {
    try {
      setIsLoading(true);

      const data = await productsDetailAPI(productId);

      console.log('상세: ', data);
      setIsLoading(false);
      return data.data;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  // 모달에 전달할 상품 삭제
  const handleDeleteItemClick = () => {
    setCloseModal();
    deleteCartItem();
    setItems(prev => prev.filter(v => v.cart_item_id !== cartItemIdToDelete));
    setCheckedItem(prev => [
      ...prev.filter(v => v.cartItemId !== cartItemIdToDelete),
    ]);
  };

  const deleteCartItem = async () => {
    try {
      const data = await deleteCartItemAPI(accessToken, cartItemIdToDelete);
    } catch (error) {
      console.error(error);
    }
  };

  const getCartList = async () => {
    try {
      setIsLoading(true);
      const data = await cartListAPI(accessToken);
      const { results } = data.data;
      setItems(results);
    } catch (error) {
      if (error.response.status === 401) {
        console.log('as');
        navigate('/login');
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCartList();
  }, []);

  return (
    <>
      <Header isLogin={isLogin} isSeller={isSeller} />
      {!isLoading ? (
        <main>
          <div css={contentDivStyles}>
            <h2 css={h2Styles}>장바구니</h2>
            <ProductTable />
            {items.length !== 0 ? (
              <>
                <OrderTotalBox />
                <div css={buttonWrapDivStyles}>
                  <Button size="lg" onClickEvent={handleOrderClick}>
                    주문하기
                  </Button>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
          {modalState.isOpen && (
            <Modal yesOnClickEvent={handleDeleteItemClick}>
              상품을 삭제하시겠습니까?
            </Modal>
          )}
        </main>
      ) : (
        <div>Loading...</div>
      )}

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
