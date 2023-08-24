/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AmountAtom } from '../../../recoil/AmountAtom';
import { AllCheckedAtom } from '../../../recoil/AllCheckedAtom';
import { productsDetailAPI } from '../../../api/productsAPI';
import { css } from '@emotion/react';
import Amount from '../../common/Amount/Amount';
import Button from '../../Button/Button';
import DeliveryMethod from '../../DeliveryMethod/DeliveryMethod';

export default function ProductTableItemCart({
  item,
  checkList,
  setCheckList,
}) {
  const isAllCheckedR = useRecoilValue(AllCheckedAtom);
  const [product, setProduct] = useState([]);
  const [isChecked, setIsChecked] = useState(!isAllCheckedR);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [amount, setAmount] = useRecoilState(AmountAtom);

  useEffect(() => {
    setIsChecked(isAllCheckedR);
  }, [isAllCheckedR]);

  // 상품 체크박스 클릭 했을 때
  const handleCheckBoxClick = (event, productId) => {
    event.preventDefault();

    setIsChecked(!isChecked);
  };

  // 상품 상세 정보
  const getProductsDetails = async () => {
    try {
      setIsLoading(true);
      setLoadingError(null);

      const data = await productsDetailAPI(item.product_id);

      setProduct(data.data);
      setAmount(item.quantity);
    } catch (error) {
      setLoadingError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsDetails();
  }, []);

  return (
    <article css={productItemArticleStyles} data-id={item.product_id}>
      <div css={css({ margin: '0 30px' })}>
        <label>
          <input
            title="상품을 결제상품으로 설정"
            type="checkbox"
            className="a11y-hidden"
            checked={isChecked}
            readOnly
          />
          <div
            css={allOrderSelectStyles}
            onClick={event => handleCheckBoxClick(event, item.product_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="9" stroke="#21BF48" strokeWidth="2" />
              {isChecked && <circle cx="10" cy="10" r="6" fill="#21BF48" />}
            </svg>
          </div>
        </label>
      </div>

      <div css={productInfoDivStyles}>
        <a href="/#">
          <img src={product.image} alt={product.product_name} />
        </a>
        <div css={productBasicInfoDivStyles}>
          <span className="product-seller">{product.store_name}</span>
          <a href="/#">
            <strong className="product-name">{product.product_name}</strong>
          </a>
          <span className="product-unit-price">{product.price}원</span>
          {/* <span css={deliveryOptionsSpanStyles}>택배배송 / 무료배송</span> */}
          <DeliveryMethod
            styles={deliveryOptionsSpanStyles}
            shippingMethod={product.shipping_method}
            shippingFee={product.shipping_fee}
          />
        </div>
      </div>

      <div css={css({ margin: '0 48px' })}>
        <Amount amountToSet={item.quantity} max={product.stock} />
      </div>

      <div css={productTotalPrice}>
        <span>17,500원</span>
        <Button size="sm" width="130px">
          주문하기
        </Button>
      </div>

      <div css={itemDeleteStyles}>
        <button type="button">
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

const productTotalPrice = css({
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
