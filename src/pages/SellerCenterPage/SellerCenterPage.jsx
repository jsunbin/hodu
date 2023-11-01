/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import LogoImg from '../../assets/images/Logo-hodu.svg';
import SideMenuItem from '../../components/Button/SideMenuItem';
import Button from '../../components/Button/Button';
import mock from '../../data/sellerMock.json';

export default function SellerCenterPage() {
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
          <h2 css={h2Styles}>
            대시보드 <strong css={StoreNameStrongStyles}>벡엔드글로벌</strong>
          </h2>

          <div>
            <Button size="ms" icon={true}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2" />
                <path
                  d="M7.66602 15.5831H24.3327"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M16 24.3333L16 7.66658"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
              상품 업로드
            </Button>
          </div>
        </div>

        <div css={mainWrapStyles}>
          <section css={containerSectionStyles}>
            <div css={contentDivStyles}>
              <div css={contentsHeaderDivStyles}>
                <div css={productInfoDivStyles}>상품정보</div>
                <div css={priceDivStyles}>판매가격</div>
                <div css={editDivStyles}>수정</div>
                <div css={deleteDivStyles}>삭제</div>
              </div>
              <div css={contentsAreaDivStyles}></div>
            </div>
          </section>

          <nav>
            <ul css={sideMenuListStyles}>
              <li>
                <SideMenuItem state={true}>판매중인 상품(3)</SideMenuItem>
              </li>
              <li>
                <SideMenuItem state={false} stickerContent={'2'}>
                  주문/배송
                </SideMenuItem>
              </li>
              <li>
                <SideMenuItem state={false} stickerContent={'1'}>
                  문의/리뷰
                </SideMenuItem>
              </li>
              <li>
                <SideMenuItem state={false}>통계</SideMenuItem>
              </li>
              <li>
                <SideMenuItem state={false}>스토어 설정</SideMenuItem>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}

const productInfoDivStyles = css`
  flex-grow: 5;
`;
const priceDivStyles = css`
  flex-grow: 3;
`;

const editDivStyles = css`
  padding: 10px 25px;
  flex-grow: 1;
`;

const deleteDivStyles = css`
  padding: 10px 25px;
  flex-grow: 1;
`;

const contentsHeaderDivStyles = css`
  width: 100%;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border-bottom: 1px solid #c4c4c4;
  overflow: hidden;
  background: #fff;
  border-radius: 5px 5px 0 0;
`;

const contentDivStyles = css``;
const mainWrapStyles = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;
const containerSectionStyles = css`
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  background: #f2f2f2;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  width: 100%;
  min-height: 600px;
`;

const sideMenuListStyles = css`
  margin-right: 30px;
  li {
    margin-bottom: 10px;
  }
`;

const titleGroupDivStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const mainStyles = css`
  padding: 0 100px 96px;
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

const StoreNameStrongStyles = css`
  color: var(--front-end-school, #21bf48);
  font-family: Spoqa Han Sans Neo;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px; /* 122.222% */
  margin-left: 16px;
`;

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
