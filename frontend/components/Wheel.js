import React, { useReducer, useState } from 'react';
import { moveClockwise } from "../state/action-creators";
import { connect } from 'react-redux';



function Wheel(props) {
  const [currentIndex, setIndex] = useState(0);
  const { letter } = props;

  console.log(props)

  const clockWise = () => {
    setIndex(prevIndex => (prevIndex + 1) % ids.length);
  }

  const counterClockWise = () => {
    setIndex(prevIndex => (prevIndex - 1 + ids.length) % ids.length);
  }

  const ids = [0, 1, 2, 3, 4, 5]
  return (
    <div id="wrapper">
      <div id="wheel">
        {ids.map(id => {
          if (id === currentIndex) {
            return (<div key={id} className='cog active' style={{ "--i": id }}>{letter}</div>)
          }
          return (
            <div key={id} className='cog' style={{ "--i": id }}></div>
          )
        })}
        {/* <div className="cog active" style={{ "--i": 0 }}></div> */}
        {/* <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>--i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={counterClockWise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={clockWise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    letter: state.wheelReducer.wheelLetter
  }
}

export default connect(mapStateToProps, { moveClockwise })(Wheel);