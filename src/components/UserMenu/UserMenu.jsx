/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useCallback } from 'react';
import { css } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import unionIcon from '../../assets/images/icon-union.svg';
import userIcon from '../../assets/images/icon-user.svg';
import { useResetRecoilState } from 'recoil';
import { TokenAtom } from '../../recoil/TokenAtom';

export default function UserMenu() {
  const navigate = useNavigate();
  const resetToken = useResetRecoilState(TokenAtom);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoutClick = () => {
    resetToken();
    navigate('/login');
  };

  const handleButtonClick = useCallback(e => {
    e.stopPropagation();
    setIsOpen(nextIsOpen => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div css={wrapDivStyles}>
      <button css={userButtonStyles} onClick={handleButtonClick}>
        마이페이지
      </button>

      {isOpen && (
        <div css={popupWrapDivStyles}>
          <ul css={ulStyles}>
            <li>
              <Link to="/mypage" css={buttonStyles}>
                마이페이지
              </Link>
            </li>
            <li>
              <button css={buttonStyles} onClick={handleLogoutClick}>
                로그아웃
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

const wrapDivStyles = css`
  position: relative;
  z-index: 10;
`;

const userButtonStyles = css`
  display: inline-block;
  min-width: 46px;
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: #767676;
  text-align: center;
  background: #ffffff;

  position: relative;
  &:before {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    margin: 0 auto 4px;
    background: url(${userIcon}) top no-repeat;
  }
`;
const popupWrapDivStyles = css`
  display: block;
  width: 130px;
  height: 118px;
  background: url(${unionIcon}) center / contain no-repeat;
  position: absolute;
  top: 56px;
  left: -50%;
`;

const ulStyles = css`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 20;

  &:first-of-type {
    margin-bottom: 8px;
  }
`;

const buttonStyles = css`
  display: block;
  width: 110px;
  height: 40px;
  padding: 10px 0;

  color: #767676;
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: #ffffff;

  &:hover {
    border-radius: 5px;
    border: 1px solid var(--767676, #767676);
    background: #fff;
  }
`;
