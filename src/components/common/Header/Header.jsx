/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import LogoSection from './LogoSection';
import SearchForm from './SearchForm';
import MenuList from './MenuList';

export default function Header() {
  return (
    <header css={headerStyles}>
      <div className="header-start">
        <LogoSection />
        <SearchForm />
      </div>

      <MenuList />
    </header>
  );
}

const headerStyles = css({
  width: '100%',
  height: '90px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#fff',
  boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.1)',
  padding: '0 320px',
  '.header-start': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
