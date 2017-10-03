import React from 'react';
import ReactDOM from 'react-dom';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOneOption = (optionToDelete) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToDelete)
    }))
  }

  handleDeleteOptions = () => {
      this.setState(() => ({options: []}))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
        options: prevState.options.concat(option)
    }))
  }

  handlePick = () => {
    const ranNum = Math.floor(Math.random()*this.state.options.length);
    const pick = this.state.options[ranNum];
    this.setState(() => ({
      selectedOption: pick
    }))
  }

  handleClearSelectedOption= () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}))
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      console.log('saving data')
      localStorage.setItem('options', json);

    }
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    console.log(this);
    return(
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <Action
            handlePick={ this.handlePick }
            hasOptions={!!this.state.options.length}
            />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOneOption={this.handleDeleteOneOption}
              />
            <AddOption
              handleAddOption={this.handleAddOption}
              hasOptions={!!this.state.options.length}
              />
          </div>
          <OptionModal
            handleClearSelectedOption={ this.handleClearSelectedOption }
            selectedOption={ this.state.selectedOption }
            />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
