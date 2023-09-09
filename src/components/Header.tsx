'use client';
import React, { useState } from 'react';
import Link from '../../node_modules/next/link';
import Button from './Button';
import KodeLogo from './KodeLogo';

const navigations = [
  { title: 'Home', link: '/' },
  { title: 'Contact Us', link: '/contact' },
];

function Header() {
  const [active, setActive] = useState(0);

  return (
    <div className='bg-white w-full fixed flex justify-center border-b shadow z-50'>
      <header className='flex justify-between text-black items-center px-5 md:px-0 w-full md:w-[80%] py-3'>
        <div className='logo'>
          <KodeLogo height={40} width={40} />
        </div>
        <nav className='flex items-center gap-x-10'>
          <ul className='items-center gap-x-5 hidden md:flex'>
            {navigations.map((nav, idx) => (
              <li
                key={idx}
                className={`text-sm transition-all ease-in-out duration-500 ${
                  active === idx ? 'border-b-2 border-t-2 text-pri' : ''
                }`}
                onClick={() => setActive(idx)}
              >
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          <Link href={'/contact'}>
            <Button
              buttonText='Contact Us'
              buttonColor='bg-pri'
              textColor='text-white'
            />
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
