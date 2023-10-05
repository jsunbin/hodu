/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Amount from '../../common/Amount/Amount';
import Button from '../../Button/Button';
import { productsDetailAPI } from '../../../api/productsAPI';
import DeliveryMethod from '../../DeliveryMethod/DeliveryMethod';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { openModalSelector } from '../../../recoil/ModalAtom';
import { cartItemIdToDeleteAtom } from '../../../recoil/CartItemIdToDeleteAtom';
import { amountCartAPI } from '../../../api/cartAPI';
import { TokenAtom } from '../../../recoil/TokenAtom';
import NoButtonModal from '../../Modal/NoButtonMoal/NoButtonModal';
import { CheckedItemAtom } from '../../../recoil/CheckedItemAtom';
import { AllCheckedAtom } from '../../../recoil/AllCheckedAtom';
import { useNavigate } from 'react-router-dom';
import { orderItemAtom } from '../../../recoil/OrderAtom';
import { orderKindAtom } from '../../../recoil/orderKindAtom';

export default function ProductTableItemCart({ item }) {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [amount, setAmount] = useState(1);
  const [isAmountChanged, setIsAmountChanged] = useState(false);
  const [isNoButtonModalVisible, setIsNoButtonModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = useRecoilValue(TokenAtom);
  const [isAllChecked, setIsAllChecked] = useRecoilState(AllCheckedAtom);
  const [checkedItem, setCheckedItem] = useRecoilState(CheckedItemAtom);
  const setCartItemIdToDelete = useSetRecoilState(cartItemIdToDeleteAtom);
  const setOpenModal = useSetRecoilState(openModalSelector);
  const [orderItems, setOrderItems] = useRecoilState(orderItemAtom);
  const [orderKind, setOrderKind] = useRecoilState(orderKindAtom);

  const productTotalPrice = () => {
    const { price } = details;

    return parseInt(price * amount);
  };

  // 아이템에서 주문하기 클릭했을 때
  const handleOrderClick = event => {
    // orderKind 설정
    setOrderKind('cart_order');

    // 버튼이 위치한 article을 찾아서 product_id 찾기
    const article = event.target.closest('article');
    const targetProductId = article.getAttribute('data-product-id');

    // 위에서 찾은 product_id로 checkedItem 배열에서 해당하는 객체 찾기
    const targetItem = checkedItem.find(
      item => item.productId === parseInt(targetProductId),
    );

    // 주문페이지에서는 orderItems로 렌더링하므로 orderItems 아톰에 설정
    setOrderItems({
      totalPrice: productTotalPrice() + details.shipping_fee,
      productPrice: productTotalPrice(),
      deliveryFee: details.shipping_fee,
      items: [{ ...details, totalAmount: amount }],
    });

    // 주문페이지로 이동
    navigate('/payment');
  };

  const handleCheckBoxClick = event => {
    event.preventDefault();

    if (isChecked) {
      setIsAllChecked(isChecked);
    }

    setIsChecked(!isChecked);
  };

  // 주문수정 클릭 했을 때
  const handleOrderChangeClick = async () => {
    const itemInfo = {
      productId: item.product_id,
      cartItemId: item.cart_item_id,
      price: productTotalPrice(),
      amount: amount,
      shippingFee: details.shipping_fee,
      isChecked: isChecked,
    };

    setCheckedItem(prev => {
      const updatedItems = prev.filter(
        existingItem => existingItem.productId !== itemInfo.productId,
      );
      return [...updatedItems, itemInfo];
    });

    try {
      await amountCartAPI(
        accessToken,
        item.cart_item_id,
        item.product_id,
        amount,
      );

      setIsAmountChanged(false);

      // 주문수정 후, 1.5초 뒤에 NoButtomModal 닫기
      setIsNoButtonModalVisible(true);
      setTimeout(() => {
        setIsNoButtonModalVisible(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  // 상품 삭제
  const handleDeleteClick = event => {
    event.preventDefault();

    const cartItemId = item.cart_item_id;

    setCartItemIdToDelete(cartItemId);
    setOpenModal();

    // setCheckedItem(prev => [
    //   ...prev.filter(v => v.cartItemId !== item.cart_item_id),
    // ]);
  };

  // 상품 상세 정보
  const getProductsDetails = async () => {
    try {
      setIsLoading(true);
      const response = await productsDetailAPI(item.product_id);
      const { data } = response;

      setDetails(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsDetails();
    setAmount(item.quantity);
  }, []);

  // 장바구니 상황 정보 업데이트
  useEffect(() => {
    const itemInfo = {
      productId: item.product_id,
      cartItemId: item.cart_item_id,
      price: item.quantity * details.price,
      amount: amount,
      shippingFee: details.shipping_fee,
      isChecked: isChecked,
    };

    setCheckedItem(prev => {
      const updatedItems = prev.filter(
        existingItem => existingItem.productId !== itemInfo.productId,
      );
      return [...updatedItems, itemInfo];
    });
  }, [isChecked]);

  // 전체 선택: isAllChecked
  useEffect(() => {
    setIsChecked(isAllChecked);
  }, [isAllChecked]);

  return (
    !isLoading && (
      <article css={productItemArticleStyles} data-product-id={item.product_id}>
        <div css={css({ margin: '0 30px' })}>
          <label>
            <input
              title={`${details.product_name}을 결제상품으로 설정`}
              type="checkbox"
              className="a11y-hidden"
              checked={isChecked}
              readOnly
            />
            <button css={allOrderSelectStyles} onClick={handleCheckBoxClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  stroke="#21BF48"
                  strokeWidth="2"
                />
                {isChecked && <circle cx="10" cy="10" r="6" fill="#21BF48" />}
              </svg>
            </button>
          </label>
        </div>

        <div css={productInfoDivStyles}>
          <a href={`/product/${item.product_id}`}>
            <img src={details.image} alt={details.product_name} />
          </a>
          <div css={productBasicInfoDivStyles}>
            <span className="product-seller">{details.store_name}</span>
            <a href={`/product/${item.product_id}`}>
              <strong className="product-name">{details.product_name}</strong>
            </a>
            <span className="product-unit-price">
              {parseInt(details.price).toLocaleString()}원
            </span>
            {/* <span css={deliveryOptionsSpanStyles}>택배배송 / 무료배송</span> */}
            <DeliveryMethod
              styles={deliveryOptionsSpanStyles}
              shippingMethod={details.shipping_method}
              shippingFee={details.shipping_fee}
            />
          </div>
        </div>

        <div css={css({ margin: '0 48px', position: 'relative' })}>
          {details.stock === 0 ? (
            <Button size="md" width="150px">
              품절
            </Button>
          ) : (
            <>
              <Amount
                amount={amount}
                setAmount={setAmount}
                max={details.stock}
                setIsAmountChanged={setIsAmountChanged}
              />

              {isAmountChanged && (
                <button
                  type="button"
                  onClick={handleOrderChangeClick}
                  css={css`
                    position: absolute;
                    bottom: -3.5em;
                    left: 50%;
                    transform: translateX(-50%);
                    display: block;
                    margin-top: 3px;
                    padding: 0 12px;
                    line-height: 26px;
                    color: #424242;
                    border-radius: 4px;
                    border: 1px solid #d5d9dc;
                    color: #333333;
                    -ms-flex-item-align: start;
                    align-self: start;
                    cursor: pointer;
                    outline: none;
                    font-size: 12px;
                    background: #fff;
                  `}
                >
                  주문수정
                </button>
              )}
              {isNoButtonModalVisible && <NoButtonModal />}
            </>
          )}
        </div>

        <div css={productTotalPriceStyles}>
          <span>{productTotalPrice().toLocaleString()}원</span>
          <Button size="sm" width="130px" onClickEvent={handleOrderClick}>
            주문하기
          </Button>
        </div>

        <div css={itemDeleteStyles}>
          <button type="button" onClick={handleDeleteClick}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.14258 18.2842L18.2847 4.14204"
                stroke="#C4C4C4"
                strokeWidth="2"
              />
              <path
                d="M18.1426 18.1421L4.00044 3.99996"
                stroke="#C4C4C4"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </article>
    )
  );
}

const productItemArticleStyles = css({
  display: 'flex',
  width: '1280px',
  height: '200px',
  alignItems: 'center',
  borderRadius: '10px',
  border: '2px solid #e0e0e0',
  background: '#fff',
  position: 'relative',
});

const allOrderSelectStyles = css({
  cursor: 'pointer',
  background: 'transparent',
  svg: {
    verticalAlign: 'middle',
  },
});

const productInfoDivStyles = css({
  display: 'flex',
  img: {
    width: '164px',
    height: '164px',
    borderRadius: '10px',
    margin: '0 36px 0 10px',
  },
});

const productBasicInfoDivStyles = css({
  fontFamily: 'Spoqa Han Sans Neo',
  fontWeight: '400',
  textAlign: 'left',
  marginTop: '6px',
  '.product-seller': {
    color: '#767676',
    fontSize: '14px',
  },
  '.product-name': {
    display: 'block',
    width: '418px',
    color: '#000',
    fontSize: '18px',
    lineHeight: '22px',
    margin: '10px 0',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  '.product-unit-price': {
    color: '#000',
    fontSize: '16px',
    fontWeight: '700',
  },
});

const deliveryOptionsSpanStyles = css({
  display: 'block',
  color: '#767676',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '14px',
  fontWeight: '400',
  marginTop: '40px',
});

const productTotalPriceStyles = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '26px',
  margin: '0 100px',
  span: {
    color: '#eb5757',
    textAlign: 'center',
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '18px',
    fontWeight: '700',
  },
});

const itemDeleteStyles = css({
  position: 'absolute',
  top: '18px',
  right: '18px',
  button: {
    background: 'transparent',
  },
});
