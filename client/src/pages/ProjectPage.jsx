import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import ProjectCommentSection from '../components/ProjectCommentSection';
import ProjectCard from '../components/ProjectCard';

// import ProjectCard from '../components/ProjectCard';

export default function ProjectPage() {
  const { projectSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [project, setProject] = useState(null);
  const [recentProjects, setRecentProjects] = useState(null);

  useEffect(() => {
    //console.log(ProjectSlug);
    const fetchProject = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/project/getprojects?slug=${projectSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setProject(data.projects[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectSlug]);

  useEffect(() => {
    try {
      const fetchRecentProjects = async () => {
        const res = await fetch(`/api/project/getprojects?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentProjects(data.projects);
        }
      };
      fetchRecentProjects();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        {project && project.title}
      </h1>
      {/* <Link
        to={`/search?license=${project && project.category}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {project && project.license}
        </Button>
      </Link> */}
      <img
        src={project && project.image}
        alt={project && project.title}
        className='mt-10 p-3 max-h-[400px] w-full object-contain'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span>
          {project && new Date(project.createdAt).toLocaleDateString()}
        </span>
        <span className='italic'>
          {project && (project.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full project-content'
        dangerouslySetInnerHTML={{
          __html: project && project.content,
        }}
      ></div>
      {/* <div className='max-w-3xl mx-auto w-full'>
        <CallToAction />
      </div> */}
      <ProjectCommentSection projectId={project._id} />
      {/* <ProjectCommentSection /> */}

      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent Projects</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentProjects &&
            recentProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
        </div>
        {/* <Link
          to={'/searchprojects'}
          className='text-lg text-cyan-800 hover:underline text-center'
        >
          View all Projects
        </Link> */}
      </div>
    </main>
  );
}
