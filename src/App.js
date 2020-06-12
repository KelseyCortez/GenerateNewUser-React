import React from 'react';
import './App.css';
import Card from './components/usergen';
import TextInput from './components/TextInput';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }
  incrementNum = () => {
    this.setState({ clicks: Number(this.state.clicks) + 1 });
  }

  decreaseNum = () => {
    this.setState({ clicks: Number(this.state.clicks) - 1 });
  }
  onChange = (event) => {
    let newValue = event.target.value;
    if (typeof newValue !== "number")
    this.setState({ clicks: newValue });
}
onReset = () => {
  this.setState({
    clicks: 0,
  })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>User Generator</h1>
          <div>
            <label htmlFor='input'>
              <span> Input </span>

              <button onClick={this.incrementNum}>+</button>
              <input type="text" value={this.state.clicks} onChange={this.onChange} />
              <button onClick={this.decreaseNum}>-</button>
            </label>
          </div><Card/>
          <div>
          <button onClick={this.onReset}>Reset</button>


          </div>
          <p>
          </p>

        </header>
      </div>
    );
  }
}

export default App;
