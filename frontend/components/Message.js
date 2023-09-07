import React from 'react'
import { connect } from 'react-redux';

function Message(props) {
  const { state } = props

  return <div id="message">{state}</div>
}

const mapStateToProps = (state) => {
  return { state: state.infoMessage.state }
}

export default connect(mapStateToProps)(Message)

