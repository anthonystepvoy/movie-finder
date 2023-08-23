import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className=" text-white -mb-6 sticky top-[100vh]">
      <div className="container mx-auto text-center font-poppins font-bold text-gray-600">
        <p>Made by Anthony Stepvoy <span className='pl-4'>|</span>  
        </p>
        <Link  className='pl-4' target="_blank" href='https://twitter.com/AnthonyStepvoy'>
        <Image 
        alt='X' 
        src="/assets/x-logo.svg" 
        width={20} 
        height={20}/>
        </Link>
        <Link className='pl-4' target="_blank" href='https://github.com/anthonystepvoy'>
        <Image 
        alt='X' 
        src="/assets/github.svg" 
        width={20} 
        height={20}/>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
