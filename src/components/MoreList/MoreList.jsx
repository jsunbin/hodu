/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function MoreList({ itemType = 'login' }) {
  const items = {
    login: ['회원가입', '비밀번호 찾기'],
    footer: [
      '호두샵 소개',
      '이용약관',
      '개인정보처리방침',
      '전자금융거래약관',
      '청소년보호정책',
      '제휴문의',
    ],
  };

  return (
    <ul css={itemType === 'login' ? loginListStyles : footerListStyles}>
      {items[itemType].map(item => {
        return (
          <li key={item} css={liStyles}>
            {item === '개인정보처리방침' ? (
              <a href="/#">
                <strong>{item}</strong>
              </a>
            ) : (
              <a href="/#">{item}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

const loginListStyles = css({
  color: '#333',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '16px',
  fontWeight: '400',
  textAlign: 'center',
  margin: '30px 0 315px',
});

const footerListStyles = css({
  color: '#000',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '14px',
  fontWeight: '400',
  textAlign: 'center',
  strong: {
    fontWeight: '700',
  },
});

const liStyles = css({
  display: 'inline-block',
  lineHeight: '23px',
  '&:not(:last-child)::after': {
    content: '"|"',
    display: 'inline-block',
    width: '5px',
    margin: '0 14px',
  },
});
