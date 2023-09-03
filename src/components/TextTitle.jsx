import React from 'react';

const TextTitle = ({ text }) => {
  return (
    <div className='border-b-2 border-gray-100 my-8'>
      <p className='mb-4 text-2xl tracking-widest'>{text}</p>
    </div>
  );
};

export default TextTitle;
