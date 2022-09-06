import Head from "next/head";
import Layout from "~/components/Layout";
import ProjectEntry from "~/components/ProjectEntry/ProjectEntry";
import Tag from "~/components/Tag";
import { getAllProjects, getProjectsTags, Project } from "~/lib/project";

import styles from "./tag.module.scss";

interface ProjectsByTagProps {
  projects: Project[];
  tag: string;
}

export default function ProjectsByTag({ projects, tag }: ProjectsByTagProps) {
  return (
    <Layout>
      <Head>
        <title>Projects tagged with &quot;{tag}&quot;</title>
      </Head>

      <h1 aria-label={`Projects tagged with hashtag ${tag}`}>
        <span aria-hidden="true">
          Projects tagged with <span className="outlined">#{tag}</span>
        </span>
      </h1>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectEntry project={project} key={index} showTags={false} />
        ))}
      </div>
    </Layout>
  );
}

interface Params {
  params: {
    tag: string;
  };
}

export async function getStaticProps({ params: { tag } }: Params) {
  const projects = await getAllProjects({ tag });
  return { props: { projects, tag } };
}

export async function getStaticPaths() {
  const tags = await getProjectsTags();

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag,
        },
      };
    }),
    fallback: false,
  };
}
