import React from 'react';
import logo from '../assets/images/corm.png';
import { Button } from 'flowbite-react';
// import { Link } from 'react-router-dom';
import pdf2 from '../assets/ThesaurusGroupProject.pdf';

export default function CallToActionKM() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-cyan-800 justify-center items-center rounded-3xl text-center mb-10'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Thesaurus Project</h2>
        <p className='text-gray-500 dark:text-slate-200 my-2'>
          I had some great classmates, and taxonomy classes were a favorite of
          mine at the iSchool.
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
          <a href={pdf2} target='_blank' rel='noopener noreferrer'>
            Thesaurus Group Project
          </a>
        </Button>
      </div>
      <div className='p-7 flex-2'>
        <img src={logo} alt='corm image' />
      </div>
    </div>
  );
}
