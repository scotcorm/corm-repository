import './CallToActionAbout';
import CallToActionAbout from './CallToActionAbout';

export default function About() {
  return (
    <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold lg:text-6xl'>
        Hello all, I'm Scott Cormier 👋
      </h1>

      <div className='flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto '>
        <p className='text-gray-500 dark:text-slate-200 my-2 lg:text-xl'>
          - I've earned a tech-heavy Master of Library and Information Science
          from University of Washington focusing on Knowledge Management and
          Data Curation, and successfully completed NUCAMP's Full Stack, Front
          End and Back End Bootcamps where I gained a broad general knowledge of
          the MERN stack.
        </p>
        <p className='text-gray-500 dark:text-slate-200 my-2 lg:text-xl'>
          - Currently targeting Academic Libraries and Junior Front End
          Developer positions.
        </p>
        <p className='text-gray-500 dark:text-slate-200 my-2 lg:text-xl'>
          - I have Management experience, and have shown the ability to complete
          some interesting and complex projects using project management
          techniques, for my current employer. I am also interested in
          Institutional Repository Management, and learned a lot in the class I
          took at Library Juice Academy.
        </p>

        <CallToActionAbout />
      </div>
    </div>
  );
}
