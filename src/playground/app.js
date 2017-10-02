class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     options: ['eat', 'sleep', 'fuck']
  //   }
  // }
  state = {
    options: []
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

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  handleDeleteOneOption = (optionToDelete) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToDelete)
    }))
  }

  //property initialiazer syntax
  handleDeleteAll = () => {
    this.setState(() => ({options: []}));
  }

  handleActionSubmit = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNum];
    alert(pick);
  }

  handleAddOption = (newOption) => {
    this.setState((prevState) => ({
      options: prevState.options.concat(newOption)
    }))
  }

  render(){
    return (
      <div>
        <Header />
        <Action
          handleActionSubmit={this.handleActionSubmit}
          hasOptions={!!this.state.options.length}
          />
        <Options
          handleDeleteOneOption={this.handleDeleteOneOption}
          options={this.state.options}
          handleDeleteAll={this.handleDeleteAll}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
          options={this.state.options}
        />
      </div>
    )
  }
}

class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer'
    }
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subtitle}</h2>
      </div>
    )
  }
}

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handleActionSubmit}>What should I do?</button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteAll}>Remove All</button>
      {!props.options.length && <p>Please add an option to get started!</p>}
      <ul>
        {
          props.options.map((option, i) => (
            <Option
              key={i}
              optionText={option}
              handleDeleteOneOption={props.handleDeleteOneOption}
            />
          ))
        }
      </ul>
    </div>
  )
}

const Option = (props) => {
  // <button onClick={()=> props.handleDeleteOneOption(props.optionText)}>Remove</button>
  // <button onClick={props.handleDeleteOneOption.bind(this, props.optionText)}>Remove</button>
  const handleClick = (e) => {
      props.handleDeleteOneOption(props.optionText)
  }

  return (
    <div>
      <li>
        {props.optionText}
        <button onClick={handleClick}>Remove</button>

      </li>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: undefined
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const input = e.target.elements.input.value.trim();
    let error;
    if (!input) {
      error = 'Please enter a valid item'
      this.setState(() => ({error}))
    } else if (this.props.options.indexOf(input) > -1) {
      error = 'That item has already been entered'
      this.setState(() => ({error}))
    } else {
      error = undefined;
      this.props.handleAddOption(input);
      e.target.elements.input.value = '';
    }

  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input name="input"></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
