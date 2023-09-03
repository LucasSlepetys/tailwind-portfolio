import React from 'react';
import TextTitle from './TextTitle';
import { projects } from '../data';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Projects = () => {
  return (
    <div id='projects'>
      <div className='align-elements py-10'>
        <TextTitle text={'Web Creations'} />
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-8 items-center '>
          {projects.map((project) => {
            const { id, img, url, github, title, text } = project;
            return (
              <div
                key={id}
                className='flex flex-col rounded-xl bg-white shadow-md hover:shadow-xl duration-300'
              >
                <img
                  src={img}
                  className='w-full object-cover rounded-t-lg h-64'
                />
                <div className='m-6 flex flex-col gap-4 rounded-xl'>
                  <p className='font-bold text-lg capitalize tracking-widest'>
                    {title}
                  </p>
                  <p className='text-base tracking-wide'>{text}</p>
                  <div className='flex gap-4'>
                    <FaGithubSquare className='w-6 h-6 text-slate-400' />
                    <FaLinkedin className='w-6 h-6 text-slate-400' />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
