import React from "react"
import Layout from '../components/layout'
import me from '../images/me2.jpg'
import './about.css'

export default () => {
  return(
    <Layout>
      <div className='container'>
        <img className='me' src={me} alt="me at the piano"/>
        <p className='about'>
          Ekaterina is an enthusiastic piano teacher and performer with over 20 years experience in both education and private practice. Moscow educated in Music and Educational Psychology she furthered her studies and attained CT ABRSM (Certificate of Teaching from Associated Board of the Royal Schools of Music) in 2009. Ekaterina is a full professional member of EPTA UK (European Piano Teachers Association) and teaches different ages and stages to competition level. Her students regularly perform at Edinburgh Music Festival, EPTA concerts and masterclasses and consistently achieve Distinction and Merit levels in their graded examinations.
        </p>
      </div>
    </Layout>
  )}