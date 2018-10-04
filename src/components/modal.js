import React, { Component } from 'react'
import './modal.css'
import image01 from '../images/image01.jpg'
import image02 from '../images/image02.jpg'
import image03 from '../images/image03.jpg'
import image04 from '../images/image04.jpg'
import image05 from '../images/image05.jpg'
import close from '../images/icons8-delete-filled-50.png'

export default class Modal extends Component {
  
  constructor(props) {
    super(props)
    this.background = React.createRef()
    this.container = React.createRef()
    this.image = React.createRef()
    this.buttons = React.createRef()
  
    this.state = {
       pic: null,
    }
  }

  shouldHideModal = (x, y) => {
    const rect = this.container.current.getBoundingClientRect()
		if (!((x >= rect.left && x <= rect.right) && (y >= rect.top && y <= rect.bottom))) {
			return true
		}
  }

  scrollPlus = (l) => {
    const currentPic = (this.state.pic !== null) ? this.state.pic : this.props.initialPic
    this.setState(
      {
        pic: (currentPic + 1) % (l)
      }
    )
  }

  scrollMinus = (l) => {
    const currentPic = (this.state.pic !== null) ? this.state.pic : this.props.initialPic
    this.setState(
      {
        pic: (currentPic > 0) ? (currentPic - 1) : (l - 1)
      }
    )
  }

  render() {
    const visibility = this.props.visibility ? 'visible' : 'hidden'
    const visiblePic = (this.state.pic !== null) ? this.state.pic : this.props.initialPic

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

    const fadeAndClose = () => {
      this.background.current.classList.remove('opacityUp')
      this.background.current.classList.add('opacityDown')
      shouldToggleModal = true;
    }

    return (
      <div style={{visibility: visibility}} >
        <div className={`background ${bgOpacity}`} ref={this.background} onClick={(evt) => {
          if (this.shouldHideModal(evt.clientX, evt.clientY)) {
            fadeAndClose()
          }
        }} onTransitionEnd={() => {
          if (shouldToggleModal) {
            this.props.toggleModal()
            this.setState({pic: null})
            shouldToggleModal = false
          }
        }}>
          <div className={'img-container ' + (this.props.visibility ? 'scaleUp animate' : 'scaleDown')} ref={this.container}>
            <img className={'image ' + (this.props.visibility ? 'revealImg' : '')} src={images[visiblePic]} alt="" ref={this.image}/>
            <div className='buttons' ref={this.buttons}>
              <img className='close-button' src={close} alt='close' onClick={fadeAndClose}/>
              <div>
                <button className="img-scroll" onClick={() => {this.scrollMinus(images.length)}}>-</button>
                <button className="img-scroll" onClick={() => {this.scrollPlus(images.length)}}>+</button>
              </div>
            </div>
          </div>        
        </div>        
      </div>
    )
  }
}
