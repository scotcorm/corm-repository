import './CallToActionAbout';
import CallToActionAbout from './CallToActionAbout';
import Banner from './Banner';

export default function About() {
  return (
    <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold lg:text-6xl'>
        Hello all, I'm Scott Cormier 👋
      </h1>

      <Banner />

      <div className='flex flex-col gap-6 px-3 max-w-6xl mx-auto '>
        <p className='text-gray-500 dark:text-slate-200 my-2 lg:text-xl'>
          - I've earned a tech-heavy Master of Library and Information Science
          from the
          <a
            href='https://ischool.uw.edu/programs/mlis'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-600 dark:text-blue-400 ml-1'>
              University of Washington iSchool
            </span>
          </a>
          , focusing on Knowledge Management and Data Curation, and successfully
          completed NUCAMP's Full Stack Front End and Back End Bootcamps where I
          gained a broad general knowledge including the MERN stack.
        </p>
        <p className='text-gray-500 dark:text-slate-200 my-2 lg:text-xl'>
          - Currently targeting Academic Libraries and/or Junior Front End
          Developer positions.
        </p>
        <p className='text-gray-500 dark:text-slate-200 my-2 lg:text-xl'>
          - I have Management experience, and have shown the ability to complete
          some interesting and complex projects, using project management
          techniques, for my current employer. I am also interested in
          Institutional Repository Management, and learned a lot in the
          specialized class I completed at
          <a
            href='https://libraryjuiceacademy.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-600 dark:text-blue-400 ml-1'>
              Library Juice Academy
            </span>
          </a>
          .
        </p>
        <p className='text-gray-500 dark:text-slate-200 my-2 lg:text-xl'>
          - This site uses NPM Vite, nodemon, Tailwind CSS, the MERN stack with
          Google Firebase OAuth, JWT and Redux toolkit.
        </p>

        <CallToActionAbout />
      </div>
    </div>
  );
}
