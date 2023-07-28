/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import SlidePagination from './SlidePagination';
import arrowPrevIcon from '../../assets//images/icon-swiper-1.svg';
import arrowNextIcon from '../../assets//images/icon-swiper-2.svg';

export default function BannerSlide() {
  return (
    <section css={sectionStyles}>
      <ul css={bannerSlideStyles} lassName="banner-slide">
        <li className="banner">1</li>
        <li className="banner">2</li>
        <li className="banner">3</li>
      </ul>

      <button
        css={arrowStyles}
        type="button"
        className="slide-arrow slide-arrow-prev"
      ></button>
      <button
        css={arrowStyles}
        type="button"
        className="slide-arrow slide-arrow-next"
      ></button>

      <SlidePagination />
    </section>
  );
}

const sectionStyles = css({
  width: '100%',
  height: '500px',
  background: '#F2F2F2',
  position: 'relative',
});

const bannerSlideStyles = css({
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'row',
  height: '500px',
  position: 'relative',
  width: '100%',
  zIndex: 1,
  li: {
    overflow: 'hidden',
    verticalAlign: 'top',
    cursor: 'pointer',
    maxHeight: '500px',
    width: '100%',
    opacity: 1,
    transition: 'opacity 0.6s ease-in-out',
    flexShrink: 0,
  },
});

const arrowStyles = css({
  width: '60px',
  height: '124px',
  '&.slide-arrow-prev': {
    position: 'absolute',
    top: '50%',
    left: '30px',
    transform: 'translateY(-50%)',
    background: `url(${arrowPrevIcon}) center no-repeat`,
  },
  '&.slide-arrow-next': {
    position: 'absolute',
    top: '50%',
    right: '30px',
    transform: 'translateY(-50%)',
    background: `url(${arrowNextIcon}) center no-repeat`,
  },
});
