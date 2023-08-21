/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
// import PropTypes from 'prop-types';

const sizeStyles = {
  sm: {
    fontSize: '18px',
    lineHegight: '23px',
    '&::after': {
      marginLeft: '2px',
    },
  },
  md: {
    fontSize: '24px',
    lineHegight: '30px',
    '&::after': {
      marginLeft: '4px',
    },
  },
  lg: {
    fontSize: '36px',
    lineHegight: '45px',
    '&::after': {
      marginLeft: '4px',
    },
  },
};

const price = css({
  color: '#000',
  fontWeight: 700,
  '&::after': {
    content: '"원"',
    color: '#767676',
    fontSize: '0.6em',
    fontWeight: '400',
    verticalAlign: 'middle',
  },
});

export default function Price({ children, size, className, color }) {
  const priceStyles = [
    price,
    sizeStyles[size],
    css({ color: color, '&::after': { color: color } }),
  ];

  return (
    <div>
      <span css={priceStyles}>
        {!!children ? children.toLocaleString() : '0'}
      </span>
    </div>
  );
}

// Price.propTypes = {
//   children: PropTypes.node.isRequired,
//   size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
// };
