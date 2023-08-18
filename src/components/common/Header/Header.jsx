/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import LogoSection from './LogoSection';
import SearchForm from './SearchForm';
import MenuList from './MenuList';

export default function Header({ isLogin, isSeller }) {
  return (
    <header css={headerStyles}>
      <div css={headerWrappStyles}>
        <div css={headerStartStyles}>
          <LogoSection />
          <SearchForm />
        </div>

        <MenuList isLogin={isLogin} isSeller={isSeller} />
      </div>
    </header>
  );
}

const headerStyles = css`
  width: 100%;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;

const headerWrappStyles = css`
  display: flex;
  max-width: 1280px;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const headerStartStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
