/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import SideMenuItem from '../../components/Button/SideMenuItem';
import Button from '../../components/Button/Button';
import SellerHeader from '../../components/common/Header/SellerHeader';
import { deleteProduct, getSellersProducts } from '../../api/sellerAPI';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  closeModalSelector,
  modalStateAtom,
  openModalSelector,
} from '../../recoil/ModalAtom';
import Modal from '../../components/Modal/Modal';

function OnSaleItem({ item, setProductIdToDelete }) {
  const { product_id, image, product_name, stock, price } = item;
  const setOpenModal = useSetRecoilState(openModalSelector);

  // 삭제 버튼 클릭 이벤트
  const handleDeleteClick = () => {
    console.log('삭제?');
    setProductIdToDelete(product_id);
    setOpenModal();
  };

  return (
    <article css={itemArticleStyles} data-id={product_id}>
      <div css={itemInfoDivStyles}>
        <img css={itemPreviewImgStyles} src={image} alt={product_name} />
        <div>
          <span css={itemNameSpanStyles}>{product_name}</span>
          <span css={itemsStockSpanStyles}>재고: {stock}개</span>
        </div>
      </div>
      <div css={itemPriceDivStyles}>{price.toLocaleString()}원</div>
      <div css={itemEditDivStyles}>
        <Button size="sm">수정</Button>
      </div>
      <div css={itemDeleteDivStyles}>
        <Button onClickEvent={handleDeleteClick} size="sm" color="white">
          삭제
        </Button>
      </div>
    </article>
  );
}

function OnSaleItemList({ items, setProductIdToDelete }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.product_id}>
          <OnSaleItem item={item} setProductIdToDelete={setProductIdToDelete} />
        </li>
      ))}
    </ul>
  );
}

export default function SellerCenterPage() {
  const { productId } = useParams();
  const setCloseModal = useSetRecoilState(closeModalSelector);

  const [items, setItems] = useState([]);
  const modalState = useRecoilValue(modalStateAtom);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  // 삭제 확인 모달에서 확인 버튼 클릭 이벤트
  const handleDelete = async () => {
    console.log('삭제!');
    try {
      const response = await deleteProduct(productIdToDelete);
      console.log(response);
      setItems(prevItems =>
        prevItems.filter(item => item['product_id'] !== productIdToDelete),
      );
      setCloseModal();
    } catch (e) {
      console.log(e);
    }
  };

  const handleLoad = async () => {
    try {
      const response = await getSellersProducts();
      const { results } = response;
      setItems(results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <SellerHeader />

      <main css={mainStyles}>
        <div css={titleGroupDivStyles}>
          <h2 css={h2Styles}>
            대시보드 <strong css={StoreNameStrongStyles}>벡엔드글로벌</strong>
          </h2>

          <div>
            <Button size="ms" icon={true} href={'/products/new'}>
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
              <div>
                <OnSaleItemList
                  items={items}
                  setProductIdToDelete={setProductIdToDelete}
                />
              </div>
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

        {modalState.isOpen && (
          <Modal yesOnClickEvent={handleDelete}>상품을 삭제하시겠습니까?</Modal>
        )}
      </main>
    </>
  );
}

const itemDeleteDivStyles = css`
  flex: 1 1 10%;

  text-align: center;
`;

const itemEditDivStyles = css`
  flex: 1 1 10%;

  text-align: center;
`;

const itemPriceDivStyles = css`
  flex: 1 1 30%;

  text-align: center;
`;

const itemNameSpanStyles = css`
  display: block;
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 122.222% */
  margin-bottom: 10px;
  text-align: left;
`;

const itemsStockSpanStyles = css`
  display: block;
  color: #767676;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`;

const itemInfoDivStyles = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 50%;
`;

const itemArticleStyles = css`
  width: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #c4c4c4;
  padding: 16px 30px;
`;

const itemPreviewImgStyles = css`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 30px;
`;

const productInfoDivStyles = css`
  flex: 1 1 50%;
`;
const priceDivStyles = css`
  flex: 1 1 30%;
`;

const editDivStyles = css`
  padding: 10px 15px;
  flex: 1 1 10%;
`;

const deleteDivStyles = css`
  padding: 10px 15px;
  flex: 1 1 10%;
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
  flex: 1 1 auto;
  width: 100%;
  height: 100vh;
  overflow: scroll;
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
