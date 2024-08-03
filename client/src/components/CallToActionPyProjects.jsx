import React from 'react';
import logo from '../assets/images/corm.png';
import { Button } from 'flowbite-react';
import '../assets/images/image.png';

export default function CallToActionPyProjects() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-cyan-800 justify-center items-center rounded-3xl text-center mb-10'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Jupyter Notebooks</h2>
        <p className='text-gray-500 dark:text-slate-200 my-2'>
          I really enjoyed working with Python in Jupyter Notebooks.
        </p>

        <Button
          type='button'
          outline
          className='flex flex-col self-center whitespace-nowrap mt-5'
        >
          <a
            href='https://scotcorm.github.io/cv/textProjects/jupyterProject.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <span className='flex flex-col self-center whitespace-nowrap'>
              <img
                src='https://jupyter.org/assets/homepage/main-logo.svg'
                alt='jupyter logo'
              />
            </span> */}
            Scott's Jupyter Project
          </a>
        </Button>
      </div>
      <div className='p-20 flex-2 '>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png'
          alt='corm image'
        />
      </div>
    </div>
  );
}
