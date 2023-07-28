import React from 'react';
import Header from '../../components/common/Header/Header';
import BannerSlide from '../../components/BannerSlide/BannerSlide';
import ProductGrid from '../../components/Product/ProductGrid/ProductGrid';
import Footer from '../../components/common/Footer/Footer';

export default function MainPage() {
  return (
    <>
      <Header />
      <BannerSlide />
      <ProductGrid />
      <Footer />
    </>
  );
}
