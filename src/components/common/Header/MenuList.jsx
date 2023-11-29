/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Button from '../../Button/Button';
import shoppingCartIcon from '../../../assets/images/icon-shopping-cart.svg';
import userIcon from '../../../assets/images/icon-user.svg';
import UserMenu from '../../UserMenu/UserMenu';

const ulStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  gap: '26px',
};

const linkStyles = props => css`
  display: inline-block;
  min-width: 46px;
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: #767676;
  text-align: center;
  background: transparent;

  &:before {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    margin: 0 auto 4px;
    background: url(${props.icon}) top no-repeat;
  }
`;

export default function MenuList({ isLogin = false, isSeller = false }) {
  const navigate = useNavigate();

  return !isLogin ? (
    // 로그인 X
    <nav>
      <ul css={ulStyles} className="menu-list">
        <li>
          <Link
            to="/cart"
            className="menu-cart"
            css={linkStyles({ icon: shoppingCartIcon })}
          >
            장바구니
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="menu-login"
            css={linkStyles({ icon: userIcon })}
          >
            로그인
          </Link>
        </li>
      </ul>
    </nav>
  ) : !isSeller ? (
    // 구매회원으로 로그인
    <nav>
      <ul css={ulStyles} className="menu-list">
        <li>
          <Link
            to="/cart"
            className="menu-cart"
            css={linkStyles({ icon: shoppingCartIcon })}
          >
            장바구니
          </Link>
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>
    </nav>
  ) : (
    // 판매회원으로 로그인
    <nav>
      <ul css={ulStyles} className="menu-list">
        <li>
          <UserMenu />
        </li>
        <li>
          <Button
            size="ms"
            icon={true}
            className="menu-seller-center"
            onClickEvent={() => {
              navigate('/seller-center');
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2.66669L4 8.00002V26.6667C4 27.3739 4.28095 28.0522 4.78105 28.5523C5.28115 29.0524 5.95942 29.3334 6.66667 29.3334H25.3333C26.0406 29.3334 26.7189 29.0524 27.219 28.5523C27.719 28.0522 28 27.3739 28 26.6667V8.00002L24 2.66669H8Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 8H28"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.3337 13.3333C21.3337 14.7478 20.7718 16.1044 19.7716 17.1045C18.7714 18.1047 17.4148 18.6666 16.0003 18.6666C14.5858 18.6666 13.2293 18.1047 12.2291 17.1045C11.2289 16.1044 10.667 14.7478 10.667 13.3333"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            판매자센터
          </Button>
        </li>
      </ul>
    </nav>
  );
}
