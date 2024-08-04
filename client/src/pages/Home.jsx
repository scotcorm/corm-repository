import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import CitationCard from '../components/CitationCard';
// import NoteCard from '../components/NoteCard';
import ProjectCard from '../components/ProjectCard';
import GenealogyrecordCard from '../components/GenealogyrecordCard';
import { Button } from 'flowbite-react';
import Hero from '../components/Hero.jsx';
import HomeHeadlineCards from '../components/HomeHeadlineCards.jsx';

export default function Home() {
  const [citations, setCitations] = useState([]);
  // const [notes, setNotes] = useState([]);
  const [projects, setProjects] = useState([]);
  const [genealogyrecords, setGenealogyrecords] = useState([]);

  useEffect(() => {
    const fetchCitations = async () => {
      const res = await fetch('/api/citation/getCitations');
      // make sure there is a getcitations controller
      const data = await res.json();
      setCitations(data.citations);
    };
    fetchCitations();
  }, []);

  // useEffect(() => {
  //   const fetchNotes = async () => {
  //     const res = await fetch('/api/note/getNotes');
  //     // make sure there is a getnotes controller
  //     const data = await res.json();
  //     setNotes(data.notes);
  //   };
  //   fetchNotes();
  // }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/project/getProjects');
      // make sure there is a getprojects controller
      const data = await res.json();
      setProjects(data.projects);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchGenealogyrecords = async () => {
      const res = await fetch('/api/genealogyrecord/getGenealogyrecords');
      // make sure there is a getnotes controller
      const data = await res.json();
      setGenealogyrecords(data.genealogyrecords);
    };
    fetchGenealogyrecords();
  }, []);

  return (
    <div className=''>
      <Hero />
      {/* <div className='max-w-[1640px] mx-auto pt-0 p-4'> */}
      {/* <img
            alt='Creative Commons License'
            style='border-width:0'
            src='https://i.creativecommons.org/l/by/4.0/88x31.png'
          /> */}
      {/* <p>
          Background image: “Minnows in a Maze” by Scott Cormier is licensed
          under a
          <span>
            <a
              href='http://creativecommons.org/licenses/by/4.0/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 ml-1 hover:underline'
            >
              Creative Commons Attribution 4.0 International License
            </a>
          </span>
          . Derivative of
          <span>
            <a
              href='https://www.si.edu/object/maze-motif:chndm_1959-150-4?edan_q=maze&oa=1&edan_fq%5B0%5D=media_usage:CC0&destination=/search/collection-images&searchResults=1&id=chndm_1959-150-4'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 ml-1 mr-1 hover:underline'
            >
              Maze Motif
            </a>
          </span>
          from the Cooper Hewitt Smithsonian Design Museum, licensed
          <span>
            <a
              href='http://creativecommons.org/licenses/by/4.0/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 ml-1 mr-1 hover:underline'
            >
              CC0
            </a>
          </span>
          and
          <span>
            <a
              href='https://www.si.edu/object/notropis-louisianae:nmnhvz_5011981?page=3&edan_q=louisiana&edan_fq%5B0%5D=media_usage:CC0&oa=1&destination=/search/collection-images&searchResults=1&id=nmnhvz_5011981'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 ml-1 mr-1 hover:underline'
            >
              Notropis louisianae
            </a>
          </span>
          from the National Museum of Natural History, also licensed
          <span>
            <a
              href='http://creativecommons.org/licenses/by/4.0/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 ml-1 mr-1 hover:underline'
            >
              CC0
            </a>
          </span>
          . Changed images by desaturating them and adding filters.
        </p>
      </div> */}

      <div className='flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto '>
        {/* <p className='text-gray-500 text-xl dark:text-slate-200'>
          Hello all, I'm Scott Cormier 👋{' '}
        </p> */}
        <h2 className='text-xl lg:text-2xl'>
          This site has links to coding projects that I am working on, including
          a
          <a
            href='/production-dashboard?tab=dashCumulative'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-600 dark:text-blue-400 ml-1 mr-1'>
              Dashboard
            </span>
          </a>
          to track production data and a
          <a href='/search' target='_blank' rel='noopener noreferrer'>
            <span className='text-blue-600 dark:text-blue-400 ml-1 mr-1'>
              MERN citations page
            </span>
          </a>
          that is meant to encourage use/reuse of images that have Open Access
          Licenses by offering a curated list with details.
        </h2>
        <p className='text-gray-500 dark:text-slate-200 my-2 lg:text-xl'>
          Sharing information effectively has been an important part of my daily
          responsibilities at Purdue University Global. I connect students and
          staff with financial aid information and apply policies and procedures
          to solve complex problems in a time-sensitive environment. Attention
          to detail is always important, and my degrees in English and History
          allow me to communicate effectively with a diverse group of people by
          helping me adjust the message to suit the needs of the situation.
          {/* I
          have always enjoyed helping students solve their information problems */}
          {/* ,
          and now that I have earned my MLIS I look forward to facing new
          information challenges. */}
        </p>

        <p className='text-gray-500 dark:text-slate-200 lg:text-xl '>
          I'm a big fan of Institutional Repositories like
          <a
            href='https://core.tdar.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-600 dark:text-blue-400 ml-1'>tDAR</span>
          </a>
          , or the one at
          <a
            href='https://repository.lsu.edu/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-600 dark:text-blue-400 ml-1'>
              LSU's Scholarly Repository
            </span>
          </a>
          , and also sites like
          <a
            href='https://thenounproject.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-600 dark:text-blue-400 ml-1 mr-1'>
              The Noun Project
            </span>
          </a>
          that encourage users to organize/share information. They helped me to
          shape my goals. I started coding while working on my MLIS at the
          <a
            href='https://ischool.uw.edu/programs/mlis'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-600 dark:text-blue-400 ml-1'>
              University of Washington Information School
            </span>
          </a>
          , to support my Data Curation projects, and now I'm a recent
          <a
            href='https://www.nucamp.co/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-600 dark:text-blue-400 ml-1 mr-1'>
              Nucamp
            </span>
          </a>
          full-stack bootcamp grad focusing mostly on the front end and working
          with React!
        </p>

        {/* <p>
          Fun fact: I built a website for my old Wing Chun group, and it helped
          introduce me to HTML, CSS and some JS.
          <a
            href='https://scotcorm.github.io/Chicago-Wing-Chun/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-blue-600 ml-7'>
              Git Hub Pages - Draft of Chicago Wing Chun Site
            </p>
          </a>
        </p> */}
      </div>

      <HomeHeadlineCards />

      {/* ========================================
      <a
        href='https://scotcorm.github.io/Chicago-Wing-Chun/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <p className='text-blue-600 ml-7'>
          Git Hub Pages - Draft of Chicago Wing Chun Site
        </p>
      </a>
      =============================================={' '} */}

      {/* <div className='flex mx-auto gap-10'> */}
      {/* <div>
            <Button outline className='br-none mt-5'>
              <Link
                to='/search'
                className='text-xs sm:text-sm font-bold cursor-pointer '
              >
                View All Citations
              </Link>
            </Button>
          </div>
          <div>
            <Button outline className='br-none mt-5'>
              <Link
                to='/projects'
                className='text-xs sm:text-sm font-bold cursor-pointer '
              >
                View All Projects
              </Link>
            </Button>
          </div> */}

      {/* <div>
            <Button outline className='br-none mt-5'>
              <Link
                to='/searchnotes'
                className='text-xs sm:text-sm  font-bold cursor-pointer '
              >
                View All Notes
              </Link>
            </Button>
          </div> */}
      {/* <div>
            <Button outline className='br-none mt-5'>
               
              <Link
                to='/searchgenealogyrecords'
                className='text-xs sm:text-sm  font-bold cursor-pointer '
              >
                View All Genealogy Records
              </Link>
            </Button>
          </div> */}
      {/* </div> */}
      {/* </div> */}
      <div className='p-3  dark:bg-slate-700 max-w-6xl mx-auto'>
        <CallToAction />
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {citations && citations.length > 0 && (
          <div className='flex flex-col gap-6 mt-20'>
            <h2 className='text-2xl font-semibold text-center'>
              Recent Citations
            </h2>
            <div className='flex flex-wrap gap-4'>
              {citations.map((citation) => (
                <CitationCard key={citation._id} citation={citation} />
              ))}
            </div>
            <Button outline className='br-none mt-5 max-w-2xl mx-auto'>
              <Link
                to={'/search'}
                className='hover:underline text-center font-bold cursor-pointer'
              >
                View all Citations
              </Link>
            </Button>
          </div>
        )}
      </div>
      {/* <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {notes && notes.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Notes</h2>
            <div className='flex flex-wrap gap-4'>
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} />
              ))}
            </div>
            <Link
              to={'/searchnotes'}
              className='text-lg text-cyan-800 hover:underline text-center'
            >
              View all Notes
            </Link>
          </div>
        )}
      </div> */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {projects && projects.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>
              Recent Projects
            </h2>
            <div className='flex flex-wrap gap-4'>
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
            <Button outline className='br-none mt-5 max-w-2xl mx-auto'>
              <Link
                to={'/projects'}
                className='hover:underline text-center font-bold cursor-pointer'
              >
                View all Projects
              </Link>
            </Button>
          </div>
        )}
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {genealogyrecords && genealogyrecords.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>
              Recent Genealogy Records
            </h2>
            <div className='flex flex-wrap gap-4'>
              {genealogyrecords.map((genealogyrecord) => (
                <GenealogyrecordCard
                  key={genealogyrecord._id}
                  genealogyrecord={genealogyrecord}
                />
              ))}
            </div>
            <Button outline className='br-none mt-5 max-w-2xl mx-auto'>
              <Link
                to={'/searchgenealogyrecords'}
                className='hover:underline text-center font-bold cursor-pointer'
              >
                View Album
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
