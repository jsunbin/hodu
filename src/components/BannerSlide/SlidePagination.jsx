/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function SlidePagination() {
  return (
    <div css={divStyles}>
      <span className="pagination-bullet active"></span>
      <span className="pagination-bullet"></span>
      <span className="pagination-bullet"></span>
    </div>
  );
}

const divStyles = css({
  display: 'block',
  width: '100%',
  textAlign: 'center',
  position: 'absolute',
  bottom: '20px',
  zIndex: 2,
  '& span.pagination-bullet': {
    display: 'inline-block',
    width: '6px',
    height: '6px',
    background: '#fff',
    borderRadius: '50%',
    margin: '0 3px',
    '&.active': {
      backgroundColor: '#000',
    },
  },
});
