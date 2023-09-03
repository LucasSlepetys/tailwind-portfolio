import React from 'react';
import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='bg-emerald-100'>
      <div className='align-elements py-7 flex flex-col gap-y-4 sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <p className='text-4xl font-bold'>
          Web<span className='text-emerald-500'>Dev</span>
        </p>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='text-lg capitalize hover:text-emerald-500 tracking-wide duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
