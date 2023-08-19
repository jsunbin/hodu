import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header/Header';
import BannerSlide from '../../components/BannerSlide/BannerSlide';
import ProductGrid from '../../components/Product/ProductGrid/ProductGrid';
import Footer from '../../components/common/Footer/Footer';
import { useRecoilValue } from 'recoil';
import { isLoginSelector, TokenAtom } from '../../recoil/TokenAtom';
import { isUserSeller } from '../../recoil/LoginAtom';
import { productsAPI } from '../../api/productsAPI';

export default function MainPage() {
  const accessToken = useRecoilValue(TokenAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const isSeller = useRecoilValue(isUserSeller);
  const [items, setItems] = useState([]);
  const [endPoint, setEndPoint] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const getProducts = async options => {
    try {
      setIsLoading(true);
      setLoadingError(null);
      const data = await productsAPI(options);

      const { results, next } = data.data;
      setEndPoint(next);

      setItems(prevItems => [...prevItems, ...results]);
    } catch (error) {
      setLoadingError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts({ accessToken });
  }, []);

  return (
    <>
      <Header isLogin={isLogin} isSeller={isSeller} />
      <BannerSlide />
      <ProductGrid items={items} />
      <Footer />
    </>
  );
}
