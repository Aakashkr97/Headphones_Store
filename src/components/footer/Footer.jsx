import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram, FaMapMarkerAlt } from "react-icons/fa";
import Cards from "../../assets/credit-cards.webp";
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-3 gap-8"
          >
            <motion.div
            initial={{opacity:0, y:100}} 
            whileInView={{opacity:1, y:0}}
            transition={{
                delay: 0.2,
                duration: 0.6,
            }}
            className="space-y-6">
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, dolor sit amet consectetur adipisicing elit. Officia,
                expedita expedita.
              </p>
              <div>
                <p className="flex items-center gap-2 mt-2">
                  <FaPhone />
                  +91 12345-67890
                </p>
                <p className="flex items-center gap-2 mt-2">
                  {" "}
                  <FaMapMarkerAlt /> Gurugram, Haryana
                </p>
              </div>
            </motion.div>

            <motion.div
             initial={{opacity:0, y:100}} 
             whileInView={{opacity:1, y:0}}
             transition={{
                 delay: 0.4,
                 duration: 0.6,
             }} className="space-y-6">
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div 
             initial={{opacity:0, y:100}} 
             whileInView={{opacity:1, y:0}}
             transition={{
                 delay: 0.6,
                 duration: 0.6,
             }}className="space-y-6">
                <h1 className="text-3xl font-bold">Follow Us</h1>
                <div className="flex items-center gap-3">
                    <FaFacebook className="text-3xl hover:scal-105 duration-300"/>
                    <FaInstagram className="text-3xl hover:scal-105 duration-300"/>
                    <FaTelegram className="text-3xl hover:scal-105 duration-300"/>
                    <FaGoogle className="text-3xl hover:scal-105 duration-300"/>
                </div>
                <div className="space-y-2">
                    <p>Payment Methods</p>

                <img src={Cards} alt="" className="w-[80%]" />
                </div>
            </motion.div>
            <p className="text-white text-center mt-8 border-t-2 pt-8">@ 2024. All Rights Reserved || Coding By Aakash</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
