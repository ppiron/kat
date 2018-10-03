import React, { Component } from 'react'
import './modal.css'
import image01 from '../images/image01.jpg'
import image02 from '../images/image02.jpg'
import image03 from '../images/image03.jpg'
import image04 from '../images/image04.jpg'
import image05 from '../images/image05.jpg'

export default class Modal extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       pic: null,
    }
  }

  shouldHideModal = (x, y) => {
    const container = document.querySelectorAll('.img-container')[0]
    const rect = container.getBoundingClientRect()
		if (!((x >= rect.left && x <= rect.right) && (y >= rect.top && y <= rect.bottom))) {
			return true
		}
  }

  render() {
    const visibility = this.props.visibility ? 'visible' : 'hidden'
    const visiblePic = this.state.pic || this.props.initialPic
    const background = document.querySelectorAll('.background')[0]

    const images = [
      image01,
      image02,
      image03,
      image04,
      image05
    ]
    
    let bgOpacity
    if (this.props.visibility === true)  {
      bgOpacity = 'opacityUp'
    } else {
      bgOpacity = 'opacityDown'
    }
    
    let shouldToggleModal = false

    return (
      <div style={{visibility: visibility}} >
        <div className={`background ${bgOpacity}`} onClick={(evt) => {
          if (this.shouldHideModal(evt.clientX, evt.clientY)) {
            background.classList.remove('opacityUp')
            background.classList.add('opacityDown')
            shouldToggleModal = true;
          }
        }} onTransitionEnd={() => {
          if (shouldToggleModal) {
            this.props.toggleModal()
            shouldToggleModal = false
          }
        }}>
          <div className={'img-container ' + (this.props.visibility ? 'scaleUp animate' : 'scaleDown')} >
            <img className={this.props.visibility ? 'revealImg' : ''} src={images[visiblePic]} alt=""/>
          </div>        
        </div>        
      </div>
    )
  }
}
