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
      <h1>
        Projects tagged with <Tag className="outlined">{tag}</Tag>
      </h1>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectEntry project={project} key={index} />
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
