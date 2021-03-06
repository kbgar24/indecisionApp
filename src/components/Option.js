import React from 'react';

const Option = (props) => {

  const handleDeleteOneOption = () => {
    props.handleDeleteOneOption(props.optionText);
  }

  return(
    <div className="option">
      <p className="option__text">{props.count}. { props.optionText }</p>
      <button
        onClick={ handleDeleteOneOption }
        className="button button--link"
      >
        Remove
      </button>
    </div>
  );
}

export default Option;
