/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from '../../Button/Button';
import shoppingCartIcon from '../../../assets/images/icon-shopping-cart.svg';
import userIcon from '../../../assets/images/icon-user.svg';

const ulStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  gap: '26px',
  a: {
    display: 'inline-block',
    minWidth: '46px',
    height: '50px',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '14px',
    color: '#767676',
    textAlign: 'center',
    fontFamily: 'Spoqa Han Sans Neo',
    '&::before': {
      content: "''",
      display: 'block',
      width: '32px',
      height: '32px',
      margin: '0 auto 4px',
    },
    '&.menu-cart::before': {
      background: `url(${shoppingCartIcon}) top no-repeat`,
    },
    '&.menu-mypage::before': {
      background: `url(${userIcon}) top no-repeat`,
    },
  },
  button: {
    marginLeft: '4px',
  },
};

export default function MenuList({ isSeller = false }) {
  return (
    <nav>
      <ul css={ulStyles} className="menu-list">
        {isSeller ? (
          <>
            <li>
              <a href="/#" className="menu-cart">
                장바구니
              </a>
            </li>
            <li>
              <Button size="ms" icon={true}>
                {/* 나머지 판매자 센터 Button 코드 */}
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/#" className="menu-cart">
                장바구니
              </a>
            </li>
            <li>
              <a href="/#" className="menu-mypage">
                마이페이지
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
