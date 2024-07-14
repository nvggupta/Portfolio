import React from 'react';
import Projects from "./Project.json";
import "../Home/Header.css";
import Card from './Card';

function Project() {
  return (
    <>
      <div className='flex flex-wrap gap-6 section1 items-start justify-center mt-3'>
        {Projects.map((elem) => (
          <Card key={elem.Name} image={elem.image} Name={elem.Name} link={elem.link} />
        ))}
      </div>
    </>
  );
}

export default Project;
