import React from "react"

class App extends React.Component {
  constructor(){
    super()

    this.state = {hr: 0, min: 0, sec: 0,
      isFinished: false
    }
    this.startTimer = null
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let num = Number(value);

    // Limiting extra 0 in the left side
    if (value.length > 3) return;

    // When higher value is given it will return max set value
    const maxVal = name === 'hr' ? 99 : 59;
    num = Math.min(Math.max(num, 0), maxVal);

    this.setState({ [name]: num });
  }

  handleStart = () => {
    if(this.startTimer) return;
    if (this.state.hr === 0 && this.state.min === 0 && this.state.sec === 0) return;
    
    this.startTimer = setInterval(() => {
      
      this.setState((prevState) => {
      let {hr, min, sec} = prevState;

      if(sec > 0) {
        sec--;
      } else if (min > 0) {
        min--;
        sec = 59;
      } else if (hr > 0) {
        hr--;
        min = 59;
        sec = 59;
      } else {
        clearInterval(this.startTimer);
        this.startTimer = null;
        return {isFinished: true};
      }

      return {hr, min, sec};

      })
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.startTimer)
  }

  handleStop = () => {
    clearInterval(this.startTimer);
    this.startTimer = null;
  }

  handleReset = () => {
    clearInterval(this.startTimer);
    this.startTimer = null;
    this.setState({ hr: 0, min: 0, sec: 0, isFinished: false });
  }

  render() {
    return (

      <div id="container">

        <h3>React Timer App</h3>
        {this.state.isFinished && <p id="message">Time's up!</p>}

        <div id="timer">
          <input type="number" 
            name="hr" 
            value={String(this.state.hr).padStart(2, "0")}
            onChange={this.handleChange}
            min={0}
            max={99}
            disabled={this.startTimer !== null}
          />
          <p>:</p>
          <input type="number"
           name="min"
           min={0}
           max={59}
           value={String(this.state.min).padStart(2, "0")}
           onChange={this.handleChange}
           disabled={this.startTimer !== null}
          />
          <p>:</p>
          <input type="number"
           name="sec" 
           value={String(this.state.sec).padStart(2, "0")}
           onChange={this.handleChange}
           min={0}
           max={59}
           disabled={this.startTimer !== null}
          />
        </div>

        <div id="btns">
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handleStop}>Stop</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>

      </div>
    )
  }
}

  

export default App
