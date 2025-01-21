import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <motion.h1 
              className='Contactt'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              CONTACT US
            </motion.h1>
            <motion.p 
              className='para'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              LET'S CONTACT :WE'RE HERE TO HELP,WE'D LOVE TO HERE FROM YOU WHEATHER YOU HAVE A COMMENT,QUESTION JUST WANT TO CHAT ,YOUCAN REACH OUT TO USTHROUGH THE CONTACT FORM OF THIS PAGE,OR BY PHONE,OR SOCIAL MEDIA.
            </motion.p>
          </div>
          <div className="row">
            <div className="col"></div>
            <motion.div 
              className="col-5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.button 
                className='button'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdOutlineMessage className='ickn'/>VIA SUPPORT CHAT
              </motion.button>
              <motion.button 
                className='button'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhoneAlt className='ickn'/>VIA CALL
              </motion.button>
              <br />
              <motion.button 
                className='buttun'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdEmail className='ickn'/>VIA EMAIL FORM
              </motion.button>
              
              <motion.form 
                action=""
                className='lbl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div>
                  <label htmlFor="name">Name</label> <br />
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    name='name'
                    className='txt'
                  /> <br />
                </div>
              </motion.form>
              <motion.form 
                action=""
                className='lbl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div>
                  <label htmlFor="name">Email</label> <br />
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    name='name'
                    className='txt'
                  /> <br />
                </div>
              </motion.form>
              <motion.form 
                action=""
                className='lbl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div>
                  <label htmlFor="name">Text</label> <br />
                  <motion.textarea 
                    whileFocus={{ scale: 1.02 }}
                    name="" 
                    id=""
                    className='txt' 
                    style={{height:'100px'}}
                  ></motion.textarea> <br />
                </div>
              </motion.form>
              
              <motion.button 
                className='button'
                style={{marginLeft:'258px'}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                SUBMIT
              </motion.button>
            </motion.div>
            <motion.div 
              className="col-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <img src="./Image/serve.jpeg" alt="" className='imgee' />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
