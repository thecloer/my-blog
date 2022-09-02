import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { FrontMatter } from '@/types/data';
import { PROJECTS } from 'data/project/projectList';
import { customMarked } from '@/config/marked.config';
import { generateGithubUrl, generateNpmUrl, generateReadmeUrl } from '@/utils';
import IconButton from '@/components/common/buttons/IconButton';
import ProjectTagButton from '@/components/project/ProjectTagButton';

interface Props {
  project: FrontMatter<'project'>;
  content: string;
}
interface Params extends ParsedUrlQuery {
  readonly slug: string;
}

const ProjectSlug: NextPage<Props> = ({ project: { title, date, tags, githubRepoSlug, npm }, content }) => {
  const formattedDate = new Date(date).toDateString();

  return (
    <div className='container-lg-62rem mx-auto px-8 md:px-0'>
      <main className='py-24'>
        <section className='mx-auto max-w-[65ch]'>
          <div className='mb-20 pb-4 border-b-2'>
            <h1 className='font-extrabold text-4xl mb-4'>{title}</h1>
            <span className='block mb-2'>{formattedDate}</span>
            <div className='flex flex-wrap '>
              <a href={generateGithubUrl(githubRepoSlug)} target='_blank' rel='noreferrer'>
                <IconButton iconName='Github' addText={true} />
              </a>
              {npm && (
                <a href={generateNpmUrl(githubRepoSlug)} target='_blank' rel='noreferrer'>
                  <IconButton iconName='npm' addText={true} />
                </a>
              )}
            </div>
            <div className='flex flex-wrap '>{tags && tags.map((tag, i) => <ProjectTagButton key={i} tag={tag} className='transition-shadow hover:shadow-none shadow-lg' />)}</div>
          </div>
          <article dangerouslySetInnerHTML={{ __html: customMarked(content) }} className='prose' />
        </section>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = PROJECTS.map((project) => ({ params: { slug: project.githubRepoSlug } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const slug = params!.slug;
  const project = PROJECTS.find((p) => p.githubRepoSlug === slug)!;
  const res = await fetch(generateReadmeUrl(slug));
  const content = await res.text();

  return {
    props: {
      project,
      content,
    },
  };
};

export default ProjectSlug;
