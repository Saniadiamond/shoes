import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa';
import { FaAmazon } from 'react-icons/fa';
// React
import { motion } from "framer-motion"

// React Server Components
// import * as motion from "framer-motion/client"
function Home() {
  return (
    <div>
       <motion.div
        className="row">
            <div className="col"></div>
            <div className="col-6">
                <motion.h1
                initial={{opacity:0, x:50}}
                animate={{opacity:1,y:10}}
                transition={{delay:1}}
                className='title'>YOUR FEET DESERVE THE BEST</motion.h1>
                <p>Lorem ipsum dolor sit amet.lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab, sunt qui earum voluptatem nam voluptas molestias soluta quibusdam id totam, repudiandae ipsam enim consectetur doloribus expedita! Cumque officia, consectetur incidunt necessitatibus eaque minima cupiditate voluptatibus provident commodi sequi repellat voluptas praesentium ipsam distinctio, delectus nostrum atque! Omnis, ea at.</p>
                <button className='btnn'>Shop Now</button>
                <button className='btann'>Category</button>
                <div>
                    <br />
                    <p style={{fontWeight:'bold'}}>Also available on</p> <br></br>
                     <Link href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={50} color="#E4405F" className='icon' />
                    </Link>
                    <Link href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                    <FaAmazon size={50} color="#FF9900"  className='icon'/>
                    </Link>
                    
                </div>
                <Outlet/>
            </div>
            <div className="col-5"> 
                <motion.img 
                initial={{opacity:0, x:20}}
                animate={{opacity:1,y:20}}
                transition={{delay:1.5}}
                src="./Image/3.png" alt="" className='profile' />
            </div>
        </motion.div>
    </div>
  )
}

export default Home
