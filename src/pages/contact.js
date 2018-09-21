import React from "react"
import Layout from '../components/layout'
import './contact.css'

export default () => {
  return(
    <Layout>
      <h3>
        Contact details:
      </h3>
      <p>
        Telephone: 07961 619168, Address: 69 Carnbee Park EH16 6GG
      </p>
      <h3>
        You can also use the below form to contact me:
      </h3>
      <div className='formContainer'>
        <form action=''>
          <div className='subject'>
            <label htmlFor='subject'>Subject:</label>
            <input type='text' name='subject' placeholder='Subject' />
          </div>
          <div className='email'>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' placeholder='Your email' />
          </div>
          {/* <label htmlFor='content'>Text:</label> */}
          <textarea name="content" placeholder='Your message'></textarea><button className='button' type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )}