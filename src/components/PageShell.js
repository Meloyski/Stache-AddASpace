import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const PageShell = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={400}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={100}
        transitionName="SlideIn"
      >
        <form><Page {...props} /></form>
      </ReactCSSTransitionGroup>
    </div>;
};

export default PageShell;
