import React, { Component } from 'react'
import Layout from '../components/layout'
import './media.css'
import image01 from '../images/image01.jpg'
import image02 from '../images/image02.jpg'
import image03 from '../images/image03.jpg'
import image04 from '../images/image04.jpg'
import image05 from '../images/image05.jpg'
import video01 from '../images/video01.jpg'
import video02 from '../images/video02.jpg'
import Modal from '../components/modal'



export default class Media extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      modalVisible: false,
    }
    this.clikedPic = null
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal(idx) {

    if (!this.state.modalVisible) {
      this.clikedPic = idx
      this.setState(
        {
          modalVisible: true
        }
      )
    } else {
      this.setState(
        {
          modalVisible: false
        }
      )
    }

  }

  render() {
    const images = [
      image01,
      image02,
      image03,
      image04,
      image05
    ]

    const videos = [
      video01,
      video02,
      video01
    ]

    return(
      <Layout>
        <Modal visibility={this.state.modalVisible} initialPic={this.clikedPic} toggleModal={this.toggleModal}></Modal>
        <h3>
          Photo
        </h3>
        <p>
          Click on a photo to enlarge it.
        </p>
        <div className="thumbContainer">
          {images.map((image, idx) => {
            return(
              <div key={image} className='fig' onClick={() => this.toggleModal(idx)}>
                <img src={image} alt={""}/>
              </div>
            )
          })}
        </div>
        <p>
          Click on a video to play it.
        </p>
        <div className="thumbContainer">
          {videos.map((video, idx) => {
            return(
              <div key={video} className='vid' >
                <img src={video} alt={""}/>
              </div>
            )
          })}
        </div>
      </Layout>  
    )
  }
}