import React, { Component } from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Overlay from '../components/overlay'
import pupils from '../images/pupils.jpg'
import abrsm from '../images/abrsm.jpg'
import epta from '../images/epta.jpg'
import trinity from '../images/trinity.png'
import likeus from '../images/likeus.jpg'
import watchus from '../images/watchus.jpg'
import './index.css'

export default class Home extends Component {
	constructor() {
		super()
		this.state = {
			visibility: 'none',
		}
		this.toggleVisibility = this.toggleVisibility.bind(this);
	}

toggleVisibility(x, y) {
	const background = document.querySelector('#background')
	const container = document.querySelector('#img-container')
	const img = document.querySelector('#pupils-large')
	if (this.state.visibility === 'none') {
		this.setState(
			{visibility: 'block'},
			() => {
				container.classList.add('animate')
				container.classList.remove('scaleDown')
				background.classList.remove('opacityDown')
				background.classList.add('opacityUp')
				window.setTimeout(() => {
					img.classList.remove('hide')
				}, 500)
			}
		)
	} else {
		console.log('x: ', x, ' y: ', y)
		const rect = container.getBoundingClientRect()
		if (!((x >= rect.left && x <= rect.right) && (y >= rect.top && y <= rect.bottom))) {
			background.classList.add('opacityDown')
			background.classList.remove('opacityUp')
			container.classList.remove('animate')
			window.setTimeout(() =>
			this.setState(
				{visibility: 'none'},
				() => {
						img.classList.add('hide')
						container.classList.add('scaleDown')
					}
				), 500
			)
		}
	}
}

render() {

	return (
			<Layout>
				<Overlay visibility={this.state.visibility} toggleVisibility={this.toggleVisibility}></Overlay>
				<h3>Welcome to AllegranDo: Piano Lessons in Edinburgh!</h3>
				<p>My name is Ekaterina Belik. I am an experienced pianist and piano teacher, professional member of EPTA&nbsp;UK (European Piano Teacher's Association).
					I enjoy performing and teaching piano to children and adults in Edinburgh, Scotland.</p>
				<div id="skills">
					<img id='pupils-small' src={pupils} alt="My Pupil" onClick={this.toggleVisibility}/>
					<p>Studying with me you will: </p>
					<ul>
						<li>Enjoy your lessons!</li>
						<li>Play and read music with confidence</li>
						<li>Build comprehensive musicianship skills</li>
						<li>Develop well-coordinated, healthy piano technique</li>
						<li>Achieve a new level of playing, regardless of age or previous level of accomplishment</li>
					</ul>	
					<p style={{ clear: `both`, paddingTop: `14px` }}>I also help my students to prepare for ABRSM, Trinity and LCM graded exams, Edinburgh Music Festival, various concerts, masterclasses and competitions.</p>
					<p>
						Please see my <Link to='/classes/' style={{ color: `hsl(357, 100%, 25%)`, textDecoration: `none`}}>Classes</Link> for <strong>Young Beginners</strong>, <strong>Adult Beginners</strong> and
						<strong> Intermediate</strong> and <strong>Advanced Students</strong>.
					</p>
				</div>
				<div style={{display: `flex`, justifyContent: `space-between`}}>
					<div style={{display: `inline-block`}}>
							<a href="http://www.abrsm.org/" target="_blank" rel="noopener noreferrer">
									<img className='logos' src={abrsm} alt="Associated Board of the Royal Schools of Music"/>
							</a>
							<a href="http://www.trinitycollege.com/" target="_blank" rel="noopener noreferrer">
									<img className='logos' src={trinity} alt="Trinity College London"/>
							</a>
							<a href="http://epta-europe.org/" target="_blank" rel="noopener noreferrer">
									<img className='logos' src={epta} alt="European Piano Teachers Association"/>
							</a>
					</div>
					<div style={{display: `inline-block`}}>
							<a href="photo-video.php">
									<img className='logos' src={watchus} alt="Watch Us"/>
							</a>
							<a href="https://www.facebook.com/AllegranDo/" target="_blank" rel="noopener noreferrer">
									<img className='logos' src={likeus} alt="facebook"/>
							</a>
					</div>
    		</div>
			</Layout>
		)
	}
}