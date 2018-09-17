import React from 'react'
import './overlay.css'
import pupils from '../images/pupils-enlarged.jpg'
import close from '../images/icons8-delete-filled-50.png'

export default function Overlay( props ) {
  return (
    <div style={{ display: props.visibility }}>
      <div id='background' className='opacityDown' 
      onClick={(evt) => props.toggleVisibility(evt.clientX, evt.clientY)}>
        <div id='img-container' className='scaleDown'>
          <img id='pupils-large' src={pupils} alt='pupils' 
          className='hide'/>
          <img id='close-button' src={close} alt='close' onClick={props.toggleVisibility}/>
        </div>
      </div>
    </div>
  )
}