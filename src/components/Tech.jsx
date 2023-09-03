import React from 'react';
import TextTitle from './TextTitle';
import { skills } from '../data';

const Tech = () => {
  return (
    <div className='align-elements py-16' id='skills'>
      <TextTitle text={'Tech Stack'} />
      <div className='grid items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {skills.map((skill) => {
          const { id, title, icon, text } = skill;
          return (
            <div key={id} className='p-2 flex flex-col gap-y-4'>
              {icon}
              <p className='text-lg font-bold'>{title}</p>
              <p className='text-sm'>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
