import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import pupils from '../images/pupils.jpg'

export default () => (
  <Layout>
    <h3>Welcome to AllegranDo: Piano Lessons in Edinburgh!</h3>
		<p>My name is Ekaterina Belik. I am an experienced pianist and piano teacher, professional member of EPTA UK (European Piano Teacher's Association).
		   I enjoy performing and teaching piano to children and adults in Edinburgh, Scotland.</p>
		<div id="skills">
			<img src={pupils} alt="My Pupil" 
			style={{ display: `block`, float: `right`, maxWidth: '300px', cursor: `zoom-in`}}/>
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
  </Layout>
)
