import React from 'react';
import Option from './Option';

const Options = (props) => {
  return(
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          onClick={props.handleDeleteOptions}
          className="button button--link"
          >
          Remove All
        </button>
      </div>
        {
          props.options.map((option, i) => (
            <Option
              key={i}
              optionText={option}
              count={i+1}
              handleDeleteOneOption={props.handleDeleteOneOption}
            />
          ))
        }
    </div>
  );
}

export default Options;
