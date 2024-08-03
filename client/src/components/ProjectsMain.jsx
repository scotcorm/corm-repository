import React from 'react';
// import CallToAction from './CallToAction';
import CallToActionProjects from './CallToActionProjects';
import CallToActionPyProjects from './CallToActionPyProjects';
import CallToActionKM from './CallToActionKM';
import CallToActionThesaurus from './CallToActionThesaurus';

export default function ProjectsMain() {
  return (
    <div className='flex flex-col px-3 max-w-6xl gap-6 mx-auto'>
      <h1 className='text-3xl font-bold lg:text-6xl mt-20'>
        Corm Repo Projects
      </h1>
      {/* <div className='min-h-screen max-w-2xl mx-auto flex   items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1> */}
      <div className='flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto '>
        <p className='text-gray-500 dark:text-slate-200 my-2 lg:text-xl'>
          This site is mainly a way for me to learn more about working in the
          MERN stack, so links to technical projects are a natural addition to
          the site. Since I've learned a lot over the years in other classes and
          other fields of specialization, I'll also be linking to general
          projects that I have completed, which I think may help to show how I
          approach problems and make decisions.
        </p>
      </div>
      <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-2 gap-6'>
        <CallToActionProjects />
        <CallToActionPyProjects />
        <CallToActionKM />
        <CallToActionThesaurus />
      </div>
    </div>
  );
}
