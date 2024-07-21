import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  let contentParagraph = (
    <div dangerouslySetInnerHTML={{ __html: project && project.content }}></div>
  );
  const shortContent =
    contentParagraph.length > 25
      ? contentParagraph.substr(0, 25) + '...'
      : contentParagraph;
  const shortTitle =
    project.title.length > 25
      ? project.title.substr(0, 25) + '...'
      : project.title;

  return (
    <div className='group relative w-full border border-cyan-800 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
      <Link to={`/project/${project.slug}`}>
        <img
          src={project.image}
          alt='project image'
          className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{shortTitle}</p>
        <span className='italic text-sm'>Added to site: {project.date}</span>
        <p className='text-sm line-clamp-2'>{shortContent}</p>

        {/* 
        <p className='text-lg font-semibold line-clamp-2'>{project.title}</p>
        <span className='italic text-sm'>{project.date}</span> */}
        <Link
          to={`/project/${project.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-cyan-800 text-cyan-800 dark:text-slate-200 hover:bg-cyan-800 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          See More!
        </Link>
      </div>
    </div>
  );
}
