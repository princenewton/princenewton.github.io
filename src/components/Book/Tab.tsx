import React from 'react';
import './Book.css';
import { TabItem }from './types';


interface TabProps {
    tabItem: TabItem;
    onClick: (tabItem: TabItem) => void;
}

const Tab: React.FC<TabProps> = ({ tabItem, onClick }) => {
  return (
    <div className="tab" onClick={() => onClick(tabItem)}>
      <img className="tabImage"
        src={tabItem.icon}
        alt={tabItem.title}
      />
    </div>
  );
};

export default Tab;
