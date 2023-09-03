import React from 'react';
import aboutSvg from '../assets/about.svg';
import TextTitle from './TextTitle';

const About = () => {
  return (
    <div id='about' className='bg-white'>
      <div className='align-elements py-14 items-center grid md:grid-cols-2'>
        <img src={aboutSvg} alt='About' className='mx-auto w-96' />
        <div className='flex flex-col'>
          <TextTitle text={'Code and Coffee'} />
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            beatae vitae provident, quas, veniam iste facilis optio accusamus
            nihil culpa eius quae distinctio placeat excepturi, praesentium
            atque quod voluptatem tempora ab et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
