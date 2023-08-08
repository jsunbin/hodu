/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from '../Button/Button';

export default function DeliveryInfo() {
  return (
    <div>
      <h3 css={h3Styles}>배송 정보</h3>
      <form css={formStyles}>
        <fieldset css={fieldsetStyles}>
          <legend>주문자 정보</legend>
          <section css={sectionStlyes}>
            <div css={divStyles}>
              <label htmlFor="name">이름</label>
              <input type="text" id="name" />
            </div>
            <div css={divStyles}>
              <label htmlFor="phoneNo">휴대폰</label>
              <input type="tel" id="phoneNo" name="phoneNo" maxLength={3} />
              -
              <input type="tel" id="phoneNo" name="phoneNo" maxLength={4} />
              -
              <input type="tel" id="phoneNo" name="phoneNo" maxLength={4} />
            </div>

            <div css={divStyles}>
              <label htmlFor="inputEmail">email</label>
              <input type="email" id="inputEmail" />
            </div>
          </section>
        </fieldset>

        <fieldset css={fieldsetStyles}>
          <legend>배송지 정보</legend>
          <section css={sectionStlyes}>
            <div css={divStyles}>
              <label htmlFor="recipient">수령인</label>
              <input type="text" id="recipient" />
            </div>
            <div css={divStyles}>
              <label htmlFor="recipientPhoneNo">휴대폰</label>
              <input
                type="tel"
                id="recipientPhoneNo"
                name="phoneNo"
                maxLength={3}
              />
              -
              <input
                type="tel"
                id="recipientPhoneNo"
                name="phoneNo"
                maxLength={4}
              />
              -
              <input
                type="tel"
                id="recipientPhoneNo"
                name="phoneNo"
                maxLength={4}
              />
            </div>

            <div css={[addressDivStyles, divStyles]}>
              <label htmlFor="address">배송주소</label>
              <div css={addressInputDivStyles}>
                <span css={zipcodeStyles}>
                  <input type="text" />
                  <Button size="sm">우편번호 조회</Button>
                </span>
                <input type="text" id="address" className="address" />
                <input type="text" id="address" className="detail-addrress" />
              </div>
            </div>
            <div css={divStyles}>
              <label htmlFor="inputEmail">배송메시지</label>
              <input type="email" id="inputEmail" />
            </div>
          </section>
        </fieldset>
      </form>
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

const formStyles = css`
  width: 1280px;
  border-top: 2px solid #c4c4c4;
`;

const fieldsetStyles = css`
  margin-top: 40px;
  legend {
    display: block;
    width: 100%;
    color: #000;
    font-family: Spoqa Han Sans Neo;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-bottom: 2px solid #c4c4c4;
    padding-bottom: 8px;
  }
`;

const sectionStlyes = css`
  label {
    display: inline-block;
    width: 120px;
    color: #000;
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 50px;
  }

  input {
    width: 334px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #c4c4c4;
  }
  input#phoneNo,
  input#recipientPhoneNo {
    width: 80px;
    margin: 0 10px;
  }
  input#phoneNo:first-of-type,
  input#recipientPhoneNo:first-of-type {
    margin: 0 10px 0 0;
  }
`;

const divStyles = css`
  border-bottom: 1px solid #c4c4c4;
  padding: 8px 0;
`;

const addressDivStyles = css`
  display: flex;
  flex-direction: row;
`;

const addressInputDivStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: none;
`;

const zipcodeStyles = css`
  display: inline-block;
  input {
    width: 170px;
    margin-right: 10px;
  }
`;
