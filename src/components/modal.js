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

    this.images = [
      image01,
      image02,
      image03,
      image04,
      image05
    ]
  }

  componentDidMount() {
    const self = this
    this.image.current.addEventListener('load', function resize() {
      self.container.current.style.height = self.image.current.scrollHeight + 50 + 'px'
      self.buttons.current.style.top = self.image.current.scrollHeight + 10 + 'px'
      self.image.current.removeEventListener('load', resize)
    })
  }

  shouldHideModal = (x, y) => {
    const rect = this.container.current.getBoundingClientRect()
		if (!((x >= rect.left && x <= rect.right) && (y >= rect.top && y <= rect.bottom))) {
			return true
		}
  }

  checkNextImgSize = (currentPic, nextPic) => {
    const prevImg = new Image()
    const nextImg = new Image()
    const prom1 = new Promise((resolve, reject) => {
      prevImg.onload = () => {
        resolve(prevImg.height)
      }
    })
    const prom2 = new Promise((resolve, reject) => {
      nextImg.onload = () => {
        resolve(nextImg.height)
      }
    })
    prevImg.src = this.images[currentPic]
    nextImg.src = this.images[nextPic]
    return Promise.all([prom1, prom2])
  }

  scrollPlus = (l) => {
    const currentPic = (this.state.pic !== null) ? this.state.pic : this.props.initialPic
    const nextPic = (currentPic + 1) % l
    this.checkNextImgSize(currentPic, nextPic).then((values) => {
      console.log(values)
      if (values[0] !== values[1]) {
        this.image.current.style.visibility = 'hidden'
      }
      this.setState(
        {
          pic: nextPic,
        }
      , this.changePic())
    })
  }

  scrollMinus = (l) => {
    const currentPic = (this.state.pic !== null) ? this.state.pic : this.props.initialPic
    const nextPic = (currentPic > 0) ? (currentPic - 1) : (l - 1)
    this.checkNextImgSize(currentPic, nextPic).then((values) => {
      console.log(values)
      if (values[0] !== values[1]) {
        this.image.current.style.visibility = 'hidden'
      }
      this.setState(
        {
          pic: nextPic,
        }
      , this.changePic())
    })
  }

  changePic = () => {
    this.buttons.current.style.position = 'absolute'
    this.buttons.current.style.top = this.image.current.scrollHeight + 10 + 'px'
    this.container.current.style.height = this.image.current.scrollHeight + 50 + 'px'
    
    const self = this
    
    this.image.current.addEventListener('load', function resize() {
      self.container.current.style.height = self.image.current.scrollHeight + 50 + 'px'
      self.buttons.current.style.transition = ''
      self.buttons.current.style.top = self.image.current.scrollHeight + 10 + 'px'
      // self.image.current.style.visibility = 'visible'
      self.image.current.removeEventListener('load', resize)
    })

    this.container.current.addEventListener('transitionend', function show() {
      self.image.current.style.visibility = ''
      self.container.current.style.height = ''
      self.buttons.current.style.position = 'relative'
      self.buttons.current.style.top = '0px'
      self.buttons.current.style.transition = 'none'
      self.container.current.removeEventListener('transitionend', show)
    })
  }

  render() {
    const visibility = this.props.visibility ? 'visible' : 'hidden'
    const visiblePic = (this.state.pic !== null) ? this.state.pic : this.props.initialPic
    
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
          <div className={'img-container ' + (this.props.visibility ? 'scaleUp animate' : 'scaleDown')} ref={this.container} onAnimationEnd={() => {
            this.image.current.classList.remove('revealImg')
            this.container.current.classList.remove('animate')
          }}>
            <img className={'image ' + (this.props.visibility ? 'revealImg' : '')} src={this.images[visiblePic]} alt="" ref={this.image}/>
            <div className='buttons' ref={this.buttons}>
              <img className='close-button' src={close} alt='close' onClick={fadeAndClose}/>
              <div>
                <button className="img-scroll" onClick={() => {this.scrollMinus(this.images.length)}}>-</button>
                <button className="img-scroll" onClick={() => {this.scrollPlus(this.images.length)}}>+</button>
              </div>
            </div>
          </div>        
        </div>        
      </div>
    )
  }
}
