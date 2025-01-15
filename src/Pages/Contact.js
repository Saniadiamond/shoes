import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { MdEmail } from "react-icons/md";


function Contact() {
  return (
    <div>
      
        <div className="container-fluid">
        <div className="container">
          <div className="row">
          <h1 className='Contactt'>CONTACT US</h1>
          <p className='para'>
            LET'S CONTACT :WE'RE HERE TO HELP,WE'D LOVE TO HERE FROM YOU WHEATHER YOU HAVE A COMMENT,QUESTION JUST WANT TO CHAT ,YOUCAN REACH OUT TO USTHROUGH THE CONTACT FORM OF THIS PAGE,OR BY PHONE,OR SOCIAL MEDIA.
          </p>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-5">
              <button className='button'> <MdOutlineMessage className='ickn'/>VIA SUPPORT CHAT</button>
              <button className='button'> <FaPhoneAlt className='ickn'/>VIA CALL</button><br />
              <button className='buttun' > <MdEmail className='ickn'/>VIA EMAIL FORM</button>
              
              <form action=""className='lbl'>
                <div>
                  <label htmlFor="name" >Name</label> <br />
                  <input type="text" name='name'className='txt'/> <br />
                  </div>
              </form>
              <form action=""className='lbl'>
                <div>
                  <label htmlFor="name" >Email</label> <br />
                  <input type="text" name='name'className='txt'/> <br />
                  </div>
              </form>
              <form action=""className='lbl'>
                <div>
                  <label htmlFor="name" >Text</label> <br />
                  <textarea name="" id=""className='txt' style={{height:'100px'}}></textarea> <br />
                  </div>
              </form>
              
              <button className='button'style={{marginLeft:'258px'}}>SUBMIT</button>

            </div>
            <div className="col-6">
              <img src="./Image/serve.jpeg" alt="" className='imgee' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
