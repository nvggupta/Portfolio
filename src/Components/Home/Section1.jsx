import React from 'react';
import "./Header.css";
import profileImage from "../../../Assets/profile.jpg";
import { IoLogoGithub } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

import { FaLinkedin } from "react-icons/fa6"
function Section1() {
  return (
    <>
      <div className='section1 flex flex-col md:flex-row items-center justify-center'>
        <div className='p-5 w-full md:w-1/2 text-center md:text-left'>
          <h1 className='text-white text-4xl md:text-6xl mb-4'>I'm A <span className='text-purple-500'> FrontEnd Developer </span></h1>
          <p className='text-white mb-4'>
            As a passionate and enthusiastic front-end developer, I specialize in creating engaging and responsive web applications. Proficient in HTML, CSS, JavaScript, and React, I have a solid understanding of modern web development practices. I enjoy transforming design concepts into interactive user experiences and continuously strive to learn and adapt to new technologies.
          </p>
          <div className='flex justify-around items-center h-10 '>
          <IoLogoGithub className='text-white cursor-pointer text-4xl '></IoLogoGithub>
          <FaLinkedin className='text-white cursor-pointer text-4xl'/>
          <CiMail className='text-white cursor-pointer text-4xl'></CiMail>
          </div>
        </div>
        <div className='flex justify-center items-center w-full md:w-1/2'>
          <img className='rounded-full w-1/2 h-auto md:w-4/5 md:h-4/5 lg:w-3/5 lg:h-3/5 hover:scale-internal' src={profileImage} alt="Profile" />
        </div>
      </div>
    </>
  );
}

export default Section1;
