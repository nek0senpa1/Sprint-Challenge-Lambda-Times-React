import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            <h4 className="tab">{props.tabs.map(stuff => {
              return <Tab tab={stuff} selectTabHandler={props.selectHandler} selectedTab={props.selectedTab} />
            })}</h4>
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
