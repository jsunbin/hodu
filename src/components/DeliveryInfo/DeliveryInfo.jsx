/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import Button from '../Button/Button';

export default function DeliveryInfo({ values, onChange }) {
  const [phoneNumber, setPhoneNumber] = useState(['', '', '']);
  const [address, setAddress] = useState(['', '', '']);

  const handleChange = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  // 휴대폰
  const handleChangePhoneNumber = event => {
    const { name, value } = event.target;
    const nextPhoneNumber = [...phoneNumber];

    if (name === 'receiverPhoneNo1') {
      nextPhoneNumber[0] = `${value}`;
    } else if (name === 'receiverPhoneNo2') {
      nextPhoneNumber[1] = `${value}`;
    } else if (name === 'receiverPhoneNo3') {
      nextPhoneNumber[2] = `${value}`;
    }

    setPhoneNumber(nextPhoneNumber);
    onChange('receiver_phone_number', nextPhoneNumber.join(''));
  };

  // 주소
  const handleChangeAddress = event => {
    const { name, value } = event.target;
    const nextAddress = [...address];

    if (name === 'zipcode') {
      nextAddress[0] = `(${value})`;
    } else if (name === 'address') {
      nextAddress[1] = `${value}`;
    } else if (name === 'detailAddress') {
      nextAddress[2] = `${value}`;
    }

    setAddress(nextAddress);
    onChange('address', nextAddress.join(' '));
  };

  return (
    <div>
      <h3 css={h3Styles}>배송 정보</h3>
      <fieldset css={fieldsetStyles}>
        <legend>주문자 정보</legend>
        <section css={sectionStyles}>
          <div css={divStyles}>
            <label htmlFor="name">이름</label>
            <input css={inputStyles} type="text" id="name" />
          </div>
          <div css={divStyles}>
            <label htmlFor="phoneNo">휴대폰</label>
            <input
              css={inputStyles({ width: '80px', margin: '0 10px 0 0' })}
              type="tel"
              id="phoneNo1"
              maxLength={3}
            />
            -
            <input
              css={inputStyles({ width: '100px', margin: '0 10px' })}
              type="tel"
              id="phoneNo2"
              maxLength={4}
            />
            -
            <input
              css={inputStyles({ width: '100px', margin: '0 10px' })}
              type="tel"
              id="phoneNo3"
              maxLength={4}
            />
          </div>

          <div css={divStyles}>
            <label htmlFor="inputEmail">email</label>
            <input css={inputStyles} type="email" id="inputEmail" />
          </div>
        </section>
      </fieldset>

      <fieldset css={fieldsetStyles}>
        <legend>배송지 정보</legend>
        <section css={sectionStyles}>
          <div css={divStyles}>
            <label htmlFor="recipient">수령인</label>
            <input
              css={inputStyles}
              type="text"
              id="recipient"
              name="receiver"
              onChange={handleChange}
            />
          </div>
          <div css={divStyles}>
            <label htmlFor="recipientPhoneNo">휴대폰</label>
            <input
              css={inputStyles({ width: '80px', margin: '0 10px 0 0' })}
              type="tel"
              id="receiverPhoneNo1"
              name="receiverPhoneNo1"
              maxLength={3}
              onChange={handleChangePhoneNumber}
            />
            -
            <input
              css={inputStyles({ width: '100px', margin: '0 10px' })}
              type="tel"
              id="receiverPhoneNo2"
              name="receiverPhoneNo2"
              maxLength={4}
              onChange={handleChangePhoneNumber}
            />
            -
            <input
              css={inputStyles({ width: '100px', margin: '0 10px' })}
              type="tel"
              id="receiverPhoneNo3"
              name="receiverPhoneNo3"
              maxLength={4}
              onChange={handleChangePhoneNumber}
            />
          </div>

          <div css={[addressDivStyles, divStyles]}>
            <label htmlFor="address">배송주소</label>
            <div css={addressInputDivStyles}>
              <span css={zipcodeStyles}>
                <input
                  css={inputStyles}
                  type="text"
                  name="zipcode"
                  onChange={handleChangeAddress}
                />
                <Button size="sm" width="154px">
                  우편번호 조회
                </Button>
              </span>
              <input
                css={inputStyles({ width: '800px' })}
                type="text"
                id="address"
                className="address"
                name="address"
                onChange={handleChangeAddress}
              />
              <input
                css={inputStyles({ width: '800px' })}
                type="text"
                id="address"
                className="detail-addrress"
                name="detailAddress"
                onChange={handleChangeAddress}
              />
            </div>
          </div>
          <div css={divStyles}>
            <label htmlFor="inputDeliveryMessage">배송메시지</label>
            <input
              css={inputStyles({ width: '800px' })}
              type="text"
              id="inputDeliveryMessage"
              name="address_message"
              onChange={handleChange}
            />
          </div>
        </section>
      </fieldset>
    </div>
  );
}

const h3Styles = css`
  color: #000;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 18px;
  border-bottom: 2px solid #c4c4c4;
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

const sectionStyles = css`
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
`;

const inputStyles = props => css`
  width: ${props.width || '334px'};
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  margin: ${props.margin};
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
