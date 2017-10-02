import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault();

    const value = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(value);
    e.target.elements.option.value = "";

    this.setState(() => ({ error }));

  }

  componentDidUpdate = () => {
    this.nameInput.focus()
  }

  render(){
    return(
      <div>
        {!this.props.hasOptions && <p>Please add an option to get started!</p>}
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input ref={(input) => {this.nameInput = input;}} type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  };
};
