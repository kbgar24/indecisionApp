// let visibility = false;
//
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };
//
// const render = () => {
//   const visToggleAppTemplate = (
//       // <div>
//       //   <h1>Visibility Toggle</h1>
//       //   <button onClick={toggleVisibility}>
//       //     {!visibility ? 'Show Details' : 'Hide Details'}
//       //   </button>
//       //   {visibility && <p>Some details</p>}
//       // </div>
//   );
//
//
//   ReactDOM.render(visToggleAppTemplate, document.getElementById('app'));
// };
//
// render();

class VisibilityToggle extends React.Component {

  constructor(){
    super();
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  };

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {!this.state.visibility ? 'Show Details' : 'Hide Details'}
        </button>
        {this.state.visibility && <p>Some details</p>}
      </div>
    )
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
