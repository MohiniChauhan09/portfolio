import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
      <div className='contact' id="contact_section">
        <div className='c_left'>
          <h3>Let's work</h3>
          <h3>together!</h3>
        </div>
        <div className='form_container'>
          <form action="https://formspree.io/f/xeqynalg" method="post">
            <input type="text" 
            name="Name"
            placeholder='Your name'
            autoComplete='off' 
            required
            />

            <input type="email" 
            name="Email"
            placeholder='your email'
            autoComplete='off' 
            required
            />

            <textarea
            name="Message" cols="25"  
            rows="4"
            placeholder='Your message'
            autoComplete='off' 
            required>
            </textarea>

            <input type="submit" value="Send message" className='btn'/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact