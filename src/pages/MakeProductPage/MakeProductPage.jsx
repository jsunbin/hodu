/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Button from '../../components/Button/Button';
import SellerHeader from '../../components/common/Header/SellerHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { productsDetailAPI } from '../../api/productsAPI';

export default function MakeProductPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    product_name: '',
    image: '',
    price: 0,
    shipping_method: 'PARCEL',
    shipping_fee: 0,
    stock: 0,
    product_info: '',
  });

  const [buttonColor, setButtonColor] = useState({
    parcel: 'default',
    delivery: 'white',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    handleValues(name, value);
  };

  const handleValues = (name, value) => {
    console.log(name, value);
    setValues(prev => ({ ...prev, [name]: value }));

    console.log(values);
  };

  // 배송방법
  const handleShippingMethod = (event, option) => {
    event.preventDefault();
    setButtonColor(prev => {
      // 모든 값을 'white'로 초기화
      const updatedColors = Object.fromEntries(
        Object.keys(prev).map(key => [key, 'white']),
      );
      // 선택한 option만 'default'로 설정
      updatedColors[option] = 'default';
      return updatedColors;
    });

    handleValues('shipping_method', option.toUpperCase());
  };

  return (
    <>
      <SellerHeader />

      <main css={mainStyles}>
        <div css={titleGroupDivStyles}>
          <h2 css={h2Styles}>상품 등록</h2>
        </div>

        <div className={'caution'}>
          <span css={cautionTitleSpanStyles}>상품 등록 시 주의사항</span>
          <p css={cautionPStyles}>
            - 너무 귀여운 사진은 심장이 아파올 수 있습니다.
            <br />- 유소년에게서 천자만홍이 피고 이상이 온갖 들어 약동하다.
            이상의 가지에 사랑의 있는가? 주며, 끓는 힘차게 얼음이 얼음 가치를
            황금시대의 있음으로써 사라지지 것이다. 이 뜨거운지라, 이상의 속에서
            이것은 피가 보배를 황금시대의 싹이 사막이다. <br />- 자신과 우는
            옷을 지혜는 아니다. 더운지라 설레는 기쁘며, 위하여서, 평화스러운
            광야에서 그리하였는가? 소담스러운 위하여 인도하겠다는 어디 무엇을
            이상을 같지 따뜻한 청춘 칼이다. <br />- 가치를 그들을 예수는 찬미를
            가슴이 과실이 이것이다. 희망의 것이다.보라, 풍부하게 이것은
            황금시대를 얼마나 인간에 돋고, 이것이다.
          </p>
        </div>

        <div css={contentDivStyles}>
          <div css={contentInfoDivStyles}>
            <div className={'content-left'} css={leftContentDivStyles}>
              <span css={titleSpanStyles}>상품 이미지</span>
              <label css={productImgLabelStyles}>
                <input type="file" style={{ display: 'none' }} />
                <span>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="25" fill="#767676" />
                    <path
                      d="M33.9119 13.5415H16.0878C14.6815 13.5415 13.5415 14.6815 13.5415 16.0878V33.9119C13.5415 35.3182 14.6815 36.4582 16.0878 36.4582H33.9119C35.3182 36.4582 36.4582 35.3182 36.4582 33.9119V16.0878C36.4582 14.6815 35.3182 13.5415 33.9119 13.5415Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.544 22.4537C21.5987 22.4537 22.4537 21.5987 22.4537 20.544C22.4537 19.4893 21.5987 18.6343 20.544 18.6343C19.4893 18.6343 18.6343 19.4893 18.6343 20.544C18.6343 21.5987 19.4893 22.4537 20.544 22.4537Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.4583 28.8194L30.0925 22.4536L16.0879 36.4582"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </label>
            </div>
            <div className={'content-right'} css={rightContentDivStyles}>
              <ul css={productInfoListStyles}>
                <li>
                  <div>
                    <span css={titleSpanStyles}>상품명</span>
                    <label>
                      <input
                        type="text"
                        css={titleInputStyles}
                        name={'product_name'}
                        value={values.product_name}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </li>
                <li>
                  <div>
                    <span css={titleSpanStyles}>판매가</span>
                    <div css={numberInputDivStyles}>
                      <div css={numberInputWrapDivStyles}>
                        <label>
                          <input
                            type="text"
                            inputMode={'numeric'}
                            css={numberInputStyles}
                            name={'price'}
                            value={values.price}
                            onChange={handleChange}
                          />
                        </label>
                      </div>

                      <span css={unitSpanStyles}>원</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <span css={titleSpanStyles}>배송방법</span>
                    <div>
                      <ul css={shippingMethodListStyles}>
                        <li>
                          <Button
                            size="ms"
                            width="220px"
                            color={buttonColor.parcel}
                            onClickEvent={event =>
                              handleShippingMethod(event, 'parcel')
                            }
                          >
                            택배, 소포, 등기
                          </Button>
                        </li>
                        <li>
                          <Button
                            size="ms"
                            width="220px"
                            color={buttonColor.delivery}
                            onClickEvent={event =>
                              handleShippingMethod(event, 'delivery')
                            }
                          >
                            직접배송(화물배달)
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <span css={titleSpanStyles}>기본 배송비</span>
                    <div css={numberInputDivStyles}>
                      <div css={numberInputWrapDivStyles}>
                        <label>
                          <input
                            type="text"
                            inputMode={'numeric'}
                            css={numberInputStyles}
                            name={'shipping_fee'}
                            value={values.shipping_fee}
                            onChange={handleChange}
                          />
                        </label>
                      </div>

                      <span css={unitSpanStyles}>원</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <span css={titleSpanStyles}>재고</span>
                    <div css={numberInputDivStyles}>
                      <div css={numberInputWrapDivStyles}>
                        <label>
                          <input
                            type="text"
                            inputMode={'numeric'}
                            css={numberInputStyles}
                            name={'stock'}
                            value={values.stock}
                            onChange={handleChange}
                          />
                        </label>
                      </div>

                      <span css={unitSpanStyles}>개</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div css={contentDetailsDivStyles}>
            <span css={titleSpanStyles}>상품 상세정보</span>
            <div css={productDetailInputStyles}>
              <input
                name={'product_info'}
                value={values.product_info}
                onChange={handleChange}
                css={inputStyles}
                // style={{ display: 'none' }}
              />
            </div>
          </div>
        </div>

        <div css={btnGroupDivStyles}>
          <Button
            onClickEvent={() => navigate(-1)}
            size="ms"
            width="200px"
            color="white"
          >
            취소
          </Button>
          <Button size="ms" width="200px" type="submit">
            저장하기
          </Button>
        </div>
      </main>
    </>
  );
}

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

const cautionTitleSpanStyles = css`
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
  border-radius: 5px;
  background: #ffefe8;
  padding: 20px;
`;

const contentDivStyles = css`
  margin: 80px 0 50px;
`;

const contentInfoDivStyles = css`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`;

const leftContentDivStyles = css`
  flex-grow: 0;
`;
const productImgLabelStyles = css`
  width: 500px;
  height: 500px;
  background: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const rightContentDivStyles = css`
  flex-grow: 1;
`;

const productInfoListStyles = css`
  li {
    margin-bottom: 26px;
  }
`;

const titleSpanStyles = css`
  display: block;
  color: var(--767676, #767676);
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

const titleInputStyles = css`
  width: calc(100% - 34px);
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 5px;
  border: 1px solid var(--C4C4C4, #c4c4c4);
  outline: none;
  padding: 17px;
`;

const numberInputDivStyles = css`
  width: 220px;
  border-radius: 5px;
  border: 1px solid var(--C4C4C4, #c4c4c4);
  position: relative;
`;

const numberInputWrapDivStyles = css`
  padding: 0 71px 0 16px;
`;

const numberInputStyles = css`
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  outline: none;
  padding: 17px 0;
`;

const unitSpanStyles = css`
  color: #fff;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline-block;
  background: #c4c4c4;
  padding: 17px 20px;
  border-radius: 0 5px 5px 0;
  position: absolute;
  top: 0;
  right: -1px;
`;

const shippingMethodListStyles = css`
  display: flex;
  gap: 10px;

  li {
    margin-bottom: 0;
  }
`;

const contentDetailsDivStyles = css``;

const productDetailInputStyles = css`
  width: 100%;
  height: 700px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--C4C4C4, #c4c4c4);
  background: var(--Gray-6, #f2f2f2);
`;

const btnGroupDivStyles = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
`;

const inputStyles = css`
  width: inherit;
  height: inherit;
  background: transparent;
  outline: none;
  border: none;
`;
