/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';
import { closeModalSelector } from '../../recoil/ModalAtom';
import Button from '../Button/Button';

export default function Modal({ children, yesOnClickEvent }) {
  const setCloseModal = useSetRecoilState(closeModalSelector);

  const handleCloseModal = () => {
    setCloseModal();
  };

  return (
    <div css={alertStyles}>
      <article css={articleStyles}>
        <p css={pStyles}>{children}</p>
        <div css={divStyles}>
          <Button
            size="sm"
            color="white"
            width="100px"
            onClickEvent={handleCloseModal}
          >
            아니오
          </Button>
          <Button size="sm" width="100px" onClickEvent={yesOnClickEvent}>
            예
          </Button>
        </div>
        <button
          css={btnCloseStyles}
          type="button"
          className="close"
          onClick={handleCloseModal}
        >
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

          <span className="a11y-hidden">닫기</span>
        </button>
      </article>
    </div>
  );
}

const alertStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const articleStyles = css`
  width: 360px;
  height: 200px;
  border: 1px solid var(--c-4-c-4-c-4, #c4c4c4);
  background: #fff;
  position: relative;
  padding-top: 40px;
  margin: 100px;
  z-index: 110;

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 20%;
  left: 30%;
`;

const pStyles = css`
  flex: 2;
  color: #000;
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-wrap: break-word;
`;

const divStyles = css`
  flex: 1;
  text-align: center;
  margin-bottom: 40px;
  button {
    margin-right: 10px;
  }
`;

const btnCloseStyles = css`
  width: 22px;
  height: 22px;
  background: transparent;
  position: absolute;
  top: 18px;
  right: 18px;
`;
