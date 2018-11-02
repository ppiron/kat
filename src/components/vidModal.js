import React, { Component } from 'react'
import './vidModal.css'
import close from '../images/icons8-delete-filled-50.png'

export default class VidModal extends Component {
  constructor(props) {
    super(props)
    this.background = React.createRef()
    this.container = React.createRef()
    this.video = React.createRef()
    this.spinner = React.createRef()

    this.videUrls = [
      "https://www.youtube.com/embed/JH2zBZSoWL0?controls=1&iv_load_policy=3",
      "https://www.youtube.com/embed/U6KyvfZyBdc?controls=1"
    ]
  }

  componentDidUpdate(prevProps, prevState) {
    const self = this
    if (this.props.visibility && !prevProps.visibility) {
      this.background.current.classList.remove('opacityDown')
      this.container.current.classList.remove('scaleDown')
      this.container.current.classList.add('animate')
      this.container.current.addEventListener('animationend', function showVid() {
        self.spinner.current.classList.remove('hidden')
        self.video.current.src = self.videUrls[self.props.initialVid]
        window.setTimeout(() => {
          self.video.current.classList.remove('hidden')
          self.video.current.classList.remove('opacityDown')
          self.spinner.current.classList.add('hidden')
          self.container.current.removeEventListener('animationend', showVid)
        }, 250)
      })
    }
    if (!this.props.visibility && prevProps.visibility) {
      this.container.current.classList.add('scaleDown')
      this.container.current.classList.remove('animate')
      this.video.current.src = ''
      this.video.current.classList.add('hidden')
      this.video.current.classList.add('opacityDown')

    }
  }

  render() {
    const visibility = this.props.visibility ? 'visible' : 'hidden'
    const hideModal = (x = 0, y = 0) => {
      const rect = this.container.current.getBoundingClientRect()
      const self = this
		  if (!((x >= rect.left && x <= rect.right) && (y >= rect.top && y <= rect.bottom))) {
        this.background.current.classList.add('opacityDown')
        this.background.current.addEventListener('transitionend', function hideModal() {
          self.props.toggleModal()
          self.background.current.removeEventListener('transitionend', hideModal)
        })
		  }
    }
    return(
      <div style={{visibility: visibility}}>
        <div className='background opacityDown' ref={this.background} onClick={(evt) => hideModal(evt.clientX, evt.clientY)}>
          <div className='vid-container scaleDown' ref={this.container}>
            <div className='vid-bg'>
              <div className='spinner hidden' ref={this.spinner}>
                ...Loading video
              </div>
              <iframe
                className='hidden vid-frame opacityDown'
                width="640" height="360"
                src="" frameBorder="0"
                allowFullScreen ref={this.video}>
              </iframe>
              <img className='close' src={close} alt='close' onClick={hideModal}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
