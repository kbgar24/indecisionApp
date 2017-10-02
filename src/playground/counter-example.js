
class Counter extends React.Component {
  constructor(){
    super()
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMineOne = this.handleMineOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }
  componentDidMount(){
    const storedCount = parseInt(localStorage.getItem('count'));
    if (!isNaN(storedCount)) {
      this.setState(() => ({count: storedCount}))
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.count !== prevState.count){
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count+1
      }
    })
  }

  handleMineOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count-1
      }
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMineOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;
// const someId = 'myidhere';
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }
//
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>RESET</button>
//
//
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();
