/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const searchFormStyles = css({
  width: '400px',
  borderRadius: '50px',
  border: '2px solid #21bf48',
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  marginLeft: '30px',
  input: {
    outline: 'none',
    width: '100%',
    border: 'none',
    height: '44px',
    padding: '0',
  },
  button: {
    background: 'none',
    width: '28px',
    height: '28px',
  },
});

export default function SearchForm() {
  return (
    <form css={searchFormStyles} className="search-form">
      <label className="a11y-hidden" htmlFor="searchItem">
        상품 검색
      </label>
      <input id="searchItem" type="text" placeholder="상품을 검색해보세요!" />
      <button type="submit" className="btn-search">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8333 22.1667C17.988 22.1667 22.1667 17.988 22.1667 12.8333C22.1667 7.67868 17.988 3.5 12.8333 3.5C7.67868 3.5 3.5 7.67868 3.5 12.8333C3.5 17.988 7.67868 22.1667 12.8333 22.1667Z"
            stroke="#21BF48"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.4998 24.5L19.4248 19.425"
            stroke="#21BF48"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="a11y-hidden">검색하기</span>
      </button>
    </form>
  );
}
