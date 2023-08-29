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

export default function CartPage() {
  const accessToken = useRecoilValue(TokenAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const isSeller = useRecoilValue(isUserSeller);
  const cartItemIdToDelete = useRecoilValue(cartItemIdToDeleteAtom);
  const modalState = useRecoilValue(modalStateAtom);
  const setCloseModal = useSetRecoilState(closeModalSelector);
  const [checkedItem, setCheckedItem] = useRecoilState(CheckedItemAtom);

  const [items, setItems] = useRecoilState(CartItemAtom);
  const [isLoading, setIsLoading] = useState(false);

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
                  <Button size="lg">주문하기</Button>
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
