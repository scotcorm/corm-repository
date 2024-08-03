import React from 'react';
import logo from '../assets/images/corm.png';
import { Button } from 'flowbite-react';
// import { Link } from 'react-router-dom';
import pdf from '../assets/KnowledgeManagementProject.pdf';

export default function CallToActionKM() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-cyan-800 justify-center items-center rounded-3xl text-center mb-10'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Knowledge Management Project</h2>
        <p className='text-gray-500 dark:text-slate-200 my-2'>
          The exchange of information in a business context was a particular
          interest of mine in grad school.
        </p>

        {/* <Link to='../assets/KnowledgeManagementProject.pdf'>
          <Button color='gray' outline>
            <span className='text-cyan-800'>KM</span>
          </Button>
        </Link> */}

        <Button
          type='button'
          outline
          className='flex flex-col self-center whitespace-nowrap mt-5'
        >
          <a href={pdf} target='_blank' rel='noopener noreferrer'>
            Knowledge Management Paper
          </a>
        </Button>
      </div>
      <div className='p-7 flex-2'>
        <img src={logo} alt='corm image' />
      </div>
    </div>
  );
}
