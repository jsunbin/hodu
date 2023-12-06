import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import ResetStyle from './styles/ResetStyle';
import MainPage from './pages/MainPage/MainPage';
import SignUpPage from './pages/SingUpPage/SignUpPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProtectedRoute from './routes/ProtectedRoute';
import MyPage from './pages/MyPage/MyPage';
import CartPage from './pages/CartPage/CartPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import OrderCompletePage from './pages/OrderCompletePage/OrderCompletePage';
import SellerCenterPage from './pages/SellerCenterPage/SellerCenterPage';
import MakeProductPage from './pages/MakeProductPage/MakeProductPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Global styles={ResetStyle} />
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="welcome/:name" element={<WelcomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route
              path="/product/:productId"
              element={<ProductDetailsPage />}
            />
            <Route element={<ProtectedRoute />}>
              <Route path="mypage" element={<MyPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="payment">
                <Route index element={<PaymentPage />} />
                <Route path="success" element={<OrderCompletePage />} />
              </Route>
              <Route path="seller-center" element={<SellerCenterPage />} />
              <Route
                path="/products/:productId"
                element={<MakeProductPage />}
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
