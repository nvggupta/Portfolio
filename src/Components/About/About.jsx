import React from "react";
import "../Home/Header.css"

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-black h-full p-5 section1">
      <div className="flex flex-col text-white w-full md:w-1/2">
        <h1 className="text-2xl font-bold">Hi, I'm Nikhil Gupta</h1>
        <p className="mt-2">
          I am a frontend developer with a postgraduate degree in MCA and an undergraduate degree in BCA. Currently based in Khurja, Bulandshahr, Uttar Pradesh, I have a passion for creating engaging and user-friendly web applications.
        </p>
        <p className="mt-2">
          While I have 2.5 years of experience in the teaching field, specializing in Mathematics for JEE Main, I am now focused on transitioning into the IT sector. My skills include HTML, CSS, JavaScript, C, C++, Java, Data Structures and Algorithms (DSA), React, and Figma.
        </p>
        <p className="mt-2">
          In addition to my professional pursuits, I enjoy playing cricket and chess, which enhance my strategic thinking and problem-solving abilities.
        </p>
      </div>
      <img 
        src="../../../Assets/logo.webp" 
        alt="Logo"
        className="mt-5 md:mt-0 md:w-1/3"
      />
    </div>
  );
}

export default About;
