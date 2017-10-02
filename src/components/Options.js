import React from 'react';
import Option from './Option';

const Options = (props) => {
  return(
    <div>
        {
          props.options.map((option, i) => (
            <Option
              key={i}
              optionText={option}
              handleDeleteOneOption={props.handleDeleteOneOption}
            />
          ))
        }
        <button
          onClick={props.handleDeleteOptions}
          className="button button--link"
        >
          Remove All
        </button>
    </div>
  );
}

export default Options;
