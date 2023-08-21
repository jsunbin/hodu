/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import TabMenuItem from './TabMenuItem';

export default function TabMenu() {
  const [activeTab, setActiveTab] = useState('details');
  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <ul css={ulStyles} className="menu-list" role="menubar">
      <li role="presentation">
        <TabMenuItem
          isActive={activeTab === 'details'}
          onClickEvent={() => handleTabClick('details')}
        >
          상세정보
        </TabMenuItem>
      </li>
      <li role="presentation">
        <TabMenuItem
          isActive={activeTab === 'reviews'}
          onClickEvent={() => handleTabClick('reviews')}
        >
          리뷰
        </TabMenuItem>
      </li>
      <li role="presentation">
        <TabMenuItem
          isActive={activeTab === 'qa'}
          onClickEvent={() => handleTabClick('qa')}
        >
          Q&#38;A
        </TabMenuItem>
      </li>
      <li role="presentation">
        <TabMenuItem
          isActive={activeTab === 'return'}
          onClickEvent={() => handleTabClick('return')}
        >
          반품&#47;교환정보
        </TabMenuItem>
      </li>
    </ul>
  );
}

const ulStyles = css`
  li {
    float: left;
  }
`;
