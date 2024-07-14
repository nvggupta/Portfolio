import React from 'react';

function Card({ image, Name, link }) {
  return (
    <>
      <div className='rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-lg transition-transform transform hover:scale-105'>
        <img src={image} alt={Name} className='w-full h-48 object-cover rounded-t-lg' />
        <div className='p-4 bg-gray-800 rounded-b-lg'>
          <h3 className='text-center text-white text-lg font-semibold mb-2'>{Name}</h3>
          <a href={link} className='block text-center text-blue-400 hover:text-blue-600 transition-colors'>
            Project Link
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
