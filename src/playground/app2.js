
class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      options: this.props.options
    }
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
  }

  handleDeleteOneOption = (optionToDelete) => {
    console.log('optionToDelete: ', optionToDelete)
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToDelete)
    }))
  }

  handleDeleteOptions(){
      this.setState(() => ({options: []}))
  }

  handleAddOption(option){
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
        options: prevState.options.concat(option)
    }))
  }

  handlePick() {
    const ranNum = Math.floor(Math.random()*this.state.options.length);
    const pick = this.state.options[ranNum];
    alert(pick);
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    console.log(this.state.options);
    return(
      <div>
        <Header subtitle={subtitle}/>
        <Action handlePick={this.handlePick} hasOptions={!!this.state.options.length}/>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOneOption={this.handleDeleteOneOption}
        />
      <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?</button>
    </div>
  );
};

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
        <button onClick={props.handleDeleteOneOption}>Remove All</button>
    </div>
  );
}

const Option = (props) => {
  return(
    <div>
      <p>{props.optionText}</p>
      <button onClick={props.handleDeleteOneOption(null, props.optionText)}>Remove</button>
    </div>
  );
}

class AddOption extends React.Component {

  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();

    const value = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(value);
    e.target.elements.option.value = "";

    this.setState(() => ({ error }));

  }

  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  };
};



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// import React from 'react';
//
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       users: [
//         { id: 1, name: 'Cory' },
//         { id: 2, name: 'Meg' }
//       ]
//     };
//   }
//
//   deleteUser = id => {
//     this.setState(prevState => {
//       return { users: prevState.users.filter( user => user.id !== id)}
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Users</h1>
//         <ul>
//         {
//           this.state.users.map( user => {
//             return (
//               <li key={user.id}>
//                 <input
//                   type="button"
//                   value="Delete"
//                   onClick={() => this.deleteUser(user.id)}
//                 />
//                 {user.name}
//               </li>
//             )
//           })
//         }
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default App;
