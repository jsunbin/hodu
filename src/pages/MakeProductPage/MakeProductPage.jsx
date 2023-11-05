/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/Logo-hodu.svg';

export default function MakeProductPage() {
  return (
    <>
      <header css={headerStyles}>
        <h1 css={h1Styles}>
          <Link to={'/'}>
            <img css={logoImgStyles} src={LogoImg} alt={'호두'} />
          </Link>
          <Link to={'/seller-center'}>판매자 센터</Link>
        </h1>
      </header>

      <main css={mainStyles}>
        <div css={titleGroupDivStyles}>
          <h2 css={h2Styles}>상품 등록</h2>
        </div>

        <div css={mainWrapStyles}>
          <section>
            <div></div>
          </section>

          <section css={leftSectionStyles}>
            <h4 css={cautionH2Styles}>*상품 등록 주의사항</h4>
            <p css={cautionPStyles}>
              - 너무 귀여운 사진은 심장이 아파올 수 있습니다.
              <br />- 유소년에게서 천자만홍이 피고 이상이 온갖 들어 약동하다.
              이상의 가지에 사랑의 있는가? 주며, 끓는 힘차게 얼음이 얼음 가치를
              황금시대의 있음으로써 사라지지 것이다. 이 뜨거운지라, 이상의
              속에서 이것은 피가 보배를 황금시대의 싹이 사막이다. <br />- 자신과
              우는 옷을 지혜는 아니다. 더운지라 설레는 기쁘며, 위하여서,
              평화스러운 광야에서 그리하였는가? 소담스러운 위하여 인도하겠다는
              어디 무엇을 이상을 같지 따뜻한 청춘 칼이다. <br />- 가치를 그들을
              예수는 찬미를 가슴이 과실이 이것이다. 희망의 것이다.보라, 풍부하게
              이것은 황금시대를 얼마나 인간에 돋고, 이것이다.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

const headerStyles = css`
  width: 100%;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 26px 100px;
`;

const h1Styles = css`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const logoImgStyles = css`
  display: inline-block;
  width: 80px;
  height: 24px;
`;

const mainStyles = css`
  padding: 0 100px 96px;
`;

const titleGroupDivStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const h2Styles = css`
  color: #000;
  text-align: left;
  font-family: Spoqa Han Sans Neo;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 122.222% */
  padding: 43px 0;
`;

const mainWrapStyles = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;

const leftSectionStyles = css`
  margin-right: 80px;
`;

const cautionH2Styles = css`
  color: var(--Red, #eb5757);
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
`;
const cautionPStyles = css`
  display: block;
  width: 320px;
  height: 346px;
  border-radius: 5px;
  background: #ffefe8;
  padding: 20px;
`;
