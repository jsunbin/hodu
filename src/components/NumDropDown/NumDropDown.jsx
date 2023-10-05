/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function NumDropDown({ onClick, setIsClicked }) {
  const handleItemClick = event => {
    // console.log(event.target.innerText);
    onClick(event.target.innerText);
    setIsClicked(false);
  };
  return (
    <ul css={ulStyles} role="menu" id="phoneStart" className="num-list">
      <li role="presentation">
        <button type="button" role="menuitem" onClick={handleItemClick}>
          010
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="menuitem" onClick={handleItemClick}>
          011
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="menuitem" onClick={handleItemClick}>
          016
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="menuitem" onClick={handleItemClick}>
          017
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="menuitem" onClick={handleItemClick}>
          018
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="menuitem" onClick={handleItemClick}>
          019
        </button>
      </li>
    </ul>
  );
}

const ulStyles = css({
  width: '152px',
  height: '150px',
  background: '#f2f2f2',
  borderRadius: '5px',
  border: '1px solid #c4c4c4',
  overflowY: 'scroll',
  position: 'absolute',
  top: '60px',
  left: '0',
  zIndex: '10',
  '&::-webkit-scrollbar': {
    width: '16px',
  },
  '&::-webkit-scrollbar-thumb': {
    height: '30%',
    background: '#c4c4c4',
    borderRadius: '10px',
    backgroundClip: 'padding-box',
    border: '5px solid transparent',
  },
  li: {
    button: {
      width: '134px',
      height: '40px',
      background: '#fff',
      padding: '10px 0',
      '&:hover': {
        background: '#e0e0e0',
      },
    },
  },
});
