/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { isLoginSelector, TokenAtom } from '../../recoil/TokenAtom';
import { isUserSeller } from '../../recoil/LoginAtom';
import { cartListAPI } from '../../api/cartAPI';
import { css } from '@emotion/react';
import Header from '../../components/common/Header/Header';
import ProductTable from '../../components/Product/ProductTable/ProductTable';
import OrderTotalBox from '../../components/OrderTotalBox/OrderTotalBox';
import Button from '../../components/Button/Button';
import Footer from '../../components/common/Footer/Footer';

export default function CartPage() {
  const accessToken = useRecoilValue(TokenAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const isSeller = useRecoilValue(isUserSeller);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const getCartList = async () => {
    try {
      setIsLoading(true);
      setLoadingError(null);
      const data = await cartListAPI(accessToken);
      const { results } = data.data;
      setItems(results);
    } catch (error) {
      setLoadingError(error);
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
            <ProductTable items={items} />
            <OrderTotalBox />
            <div css={buttonWrapDivStyles}>
              <Button size="lg">주문하기</Button>
            </div>
          </div>
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
