import React from 'react';

const Option = (props) => {

  const handleDeleteOneOption = () => {
    props.handleDeleteOneOption(props.optionText);
  }

  return(
    <div>
      <p>{ props.optionText }</p>
      <button onClick={ handleDeleteOneOption }>Remove</button>
    </div>
  );
}

export default Option;
