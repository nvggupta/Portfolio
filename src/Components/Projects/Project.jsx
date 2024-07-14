import React from 'react';

import "../Home/Header.css";
import Card from './Card';

function Project() {
    
[
    {
        "image": "Assets/download (1).png",
        "Name": "Paragraph Generator",
        "link":"https://paragenerator-ten.vercel.app/"
    },
    {
        
        "image": "Assets/download (2).png",
        "Name": "Family Wellness",
        "link":"https://vercel.com/nikhil-gupta/family-wellness"
    },
    {
        
        
            "image": "Assets/download.png",
            "Name": "Education Planner",
            "link":"https://educator-planner.vercel.app/"
        
    }
]
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
