import type { GetStaticProps, NextPage } from 'next';
import type { FrontMatter } from '@/types/data';
import ProjectCard from '@/components/project/ProjectCard';
import { PROJECTS } from 'data/project/projectList';

interface Props {
  projects: FrontMatter<'project'>[];
}

const ProjectHome: NextPage<Props> = ({ projects }) => {
  return (
    <div className='container-lg-62rem mx-auto px-8 md:px-0'>
      <main className='py-24'>
        {/* <ProjectSearch /> TODO: Project Search */}
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </section>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: { projects: PROJECTS },
  };
};

export default ProjectHome;
