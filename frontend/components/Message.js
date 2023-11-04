import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from "../state/action-creators";

function Message(props) {
  const { st, infoMessage, postAnswer, quiz } = props
  console.log(infoMessage)

  return <div id="message">{infoMessage}</div>
}

// const mapStateToProps = (state) => {
//   return { state: state.infoMessage.state }
// }

export default connect(st =>st, {actionCreators})(Message)

