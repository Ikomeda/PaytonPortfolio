import React, { useRef } from 'react'
import emailjs from "emailjs-com";
import "./contact.css"

const Contact = () => {

  const form = useRef();
  function sendContact(e) {
    e.preventDefault();

    emailjs.sendForm('service_53gsipv', 'template_34qi3bf', form.current, '54zsdQqFnM_MAB4Fy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form ref={form} onSubmit={sendContact}>
          <div className='form-group'>
            <div>
              <input type="text" className="form-control" placeholder="Name" name="name"/>
            </div>
            <div>
              <input type="text" className="form-control" placeholder="Email Address" name="email"/>
            </div>
            <div>
              <input type="text" className="form-control" placeholder="Subject" name="subject"/>
            </div>
            <div>
              <textarea type="text" className="form-control" placeholder="Your Message" name="message"></textarea>
            </div>
            <div>
              <input type="submit" className="btn" value="Send Messgage"></input>
            </div>
          
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Contact