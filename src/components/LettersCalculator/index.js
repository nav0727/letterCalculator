/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onChangeInput = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="bg">
          <div className="bg1">
            <div className="bg2">
              <h1>
                Calculate the <br /> Letters You <br /> Enter
              </h1>

              <form className="form">
                <label htmlFor="inputSearch" className="para">
                  Enter the phrase
                </label>
                <input
                  type="text"
                  id="inputSearch"
                  className="form-c"
                  placeholder="Enter the phrase"
                  onChange={this.onChangeInput}
                />
              </form>

              <div className="bg4">
                <p>No.of letters: {count}</p>
              </div>
            </div>

            <div className="bg5">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                className="image"
                alt="letters calculator"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
