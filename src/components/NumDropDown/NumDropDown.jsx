/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function NumDropDown() {
  return (
    <ul css={ulStyles} role="menu" id="phoneStart" className="num-list">
      <li role="presentation">
        <button type="button" role="menuitem">
          010
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="menuitem">
          011
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="menuitem">
          016
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="menuitem">
          017
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="menuitem">
          018
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="menuitem">
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
      background: '#fff',
      padding: '10px 0',
      '&:hover': {
        background: '#e0e0e0',
      },
    },
  },
});
