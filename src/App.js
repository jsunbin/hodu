import React, { useState } from 'react';
import { Global } from '@emotion/react';
import ResetStyle from './styles/ResetStyle';
import LoginPage from './pages/LoginPage/LoginPage';
// import './login.css';

function App() {
  return (
    <>
      <Global styles={ResetStyle} />
      <LoginPage />
    </>
  );
}
export default App;
