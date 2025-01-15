import React from "react";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { motion } from "framer-motion";

function Layout() {
  // let button=document.querySelector("#btn")
  // let boddy=document.querySelector("body")
  // let currmode="Light"
  // window.addEventListener("click",()=>{
  //   if (currmode == "Light") {
  //     currmode = "Dark";
  //     boddy.classList.add("dark");
  //     boddy.classList.remove("Light");
  //     console.log(currmode);
  //   } else {
  //     currmode = "Light";
  //     boddy.classList.add("Light");
  //     boddy.classList.remove("dark");
  //     console.log(currmode);
  //   }
  // })

return (
    <div>
      <div className="container-fluid">
        <div className="container main">
          <div className="row">
            <div className="col-3">
              <motion.img
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, y: 20 }}
                transition={{ delay: 0.5 }}
                src="./Image/newnike.jpg"
                alt=""
                className="logoo"
              />
            </div>
            <div className="col-6">
              <nav>
                <ul className="anker">
                  <li className="barrs">
                    {" "}
                    <Link to="./Pages/Register" className="anker">
                    Register yourself 
                    </Link>
                  </li>
                  <li className="barrs">
                    {" "}
                    <Link to="" className="anker">
                      Location
                    </Link>
                  </li>
                  <li className="barrs">
                    {" "}
                    <Link to="./Pages/About" className="anker">
                      About
                    </Link>
                  </li>
                  <li className="barrs">
                    {" "}
                    <Link to="./Pages/Contact" className="anker">
                      Contact
                    </Link>
                  </li>
                  <div className="col-3">
                    <button className="btnn btnlogin" id="btn" >Change Mode</button>
                  </div>
                </ul>
              </nav>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  ); }
export default Layout;
{
  /* <img src="./Image/insta.jpg" alt="" className='icon' /> */
}
