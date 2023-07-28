/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <section css={sectionStyles} className="product-list-wrapper">
      <ul css={ulStyles} className="product-grid">
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
      </ul>
    </section>
  );
}

const sectionStyles = css({
  width: '100%',
  margin: '80px 0 180px',
});

const ulStyles = css({
  display: 'grid',
  maxWidth: '1280px',
  gridTemplateColumns: 'repeat(3, minmax(380px, 1fr))',
  gap: '78px 70px',
  gridGap: '78px 70px',
  margin: '0 auto',
});
