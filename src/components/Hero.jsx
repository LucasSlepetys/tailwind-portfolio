import React from 'react';
import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-emerald-100'>
      <div className='align-elements py-14 grid items-center md:grid-cols-2'>
        <div className='flex flex-col gap-y-2 py-4'>
          <p className='text-6xl sm:text-8xl font-bold drop-shadow-xl'>
            I'm John
          </p>
          <p className='text-3xl text-slate-800'>Front-end Developer</p>
          <p className='text-xl text-slate-600'>
            Turning ideas into interactive reality
          </p>
          <div className='flex gap-x-3'>
            <FaGithubSquare className='w-8 h-8 text-slate-600 hover:text-slate-800' />
            <FaLinkedin className='w-8 h-8 text-slate-600 hover:text-slate-800' />
            <FaTwitterSquare className='w-8 h-8 text-slate-600 hover:text-slate-800' />
          </div>
        </div>
        <img
          src={heroImg}
          className='w-5/6 h-auto hidden md:block border-b-4 text-slate-700 drop-shadow-md'
        />
      </div>
    </div>
  );
};

export default Hero;
