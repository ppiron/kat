import React from 'react'
import 'overlay.css'
import pupils from '../images/pupils.jpg'

export default ( props ) => (
  <div style={{ display: props.visibility }}>
    <div id='background' >
      <img src={pupils} alt='pupils' style={{ display: `block`, margin: `0 auto`, width: `600px`}}/>
    </div>
  </div>
)