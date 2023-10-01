/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import radioOnIcon from '../../assets/images/icon-radio-on.svg';
import radioOffIcon from '../../assets/images/icon-radio-off.svg';

export default function PayMethod({ values, onChange }) {
  const handleChange = event => {
    const { value } = event.target;
    onChange('payment_method', value);
  };
  return (
    <div>
      <h3 css={h3Styles}>결제 수단</h3>
      <section css={sectionStyles}>
        <ul css={ulStyles} className="pay-method" onChange={handleChange}>
          <li>
            <input
              type="radio"
              id="payMethodCard"
              value="CARD"
              name="select-pay-method"
            />
            <label htmlFor="payMethodCard">신용/체크카드</label>
          </li>
          <li>
            <input
              type="radio"
              id="payMethodBank"
              value="DEPOSIT"
              name="select-pay-method"
            />
            <label htmlFor="payMethodBank">무통장 입금</label>
          </li>
          <li>
            <input
              type="radio"
              id="payMethodPhone"
              value="PHONE_PAYMENT"
              name="select-pay-method"
            />
            <label htmlFor="payMethodPhone">휴대폰 결제</label>
          </li>
          <li>
            <input
              type="radio"
              id="payMethodNaverPay"
              value="NAVERPAY"
              name="select-pay-method"
            />
            <label htmlFor="payMethodNaverPay">네이버페이</label>
          </li>
          <li>
            <input
              type="radio"
              id="payMethodKakaoPay"
              value="KAKAOPAY"
              name="select-pay-method"
            />
            <label htmlFor="payMethodKakaoPay">카카오페이</label>
          </li>
        </ul>
      </section>
    </div>
  );
}

const h3Styles = css`
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 18px;
`;

const sectionStyles = css`
  width: 760px;
  border-top: 2px solid #c4c4c4;
  border-bottom: 2px solid #c4c4c4;
  padding: 18px 12px;
`;

const ulStyles = css`
  li {
    display: inline-block;
    margin-right: 26px;

    &:last-child {
      margin: 0;
    }

    label {
      line-height: 20px;
      padding-left: 30px;
      position: relative;
      cursor: pointer;

      &::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${radioOffIcon}) center no-repeat;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    input {
      opacity: 0;
      position: absolute;
    }

    input:checked + label {
      ::before {
        background: url(${radioOnIcon}) center no-repeat;
      }
    }
  }
`;
