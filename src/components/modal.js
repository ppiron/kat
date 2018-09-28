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
    const images = [
      image01,
      image02,
      image03,
      image04,
      image05
    ]
    const visiblePic = this.state.pic || this.props.initialPic
    
    let backgOpacity
    if (this.props.visibility === false)  {
      backgOpacity = 'opacityDown'
    } else {
      backgOpacity = 'opacityUp'
    }

    return (
      <div style={{visibility: visibility}} >
        <div className={`background ${backgOpacity}`} onClick={(evt) => {
          if (this.shouldHideModal(evt.clientX, evt.clientY)) {
            this.props.toggleModal()
          }
        }}>
          <div className={`img-container`}>
            <img src={images[visiblePic]} alt=""/>
          </div>        
        </div>        
      </div>
    )
  }
}
