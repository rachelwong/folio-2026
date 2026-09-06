import Image from 'next/image';
import Link from 'next/link';
import Plus from '../public/plus-solid.svg';
import styles from '../styles/Home.module.scss';
import ProjectCarousel from './ProjectCarousel';

const Projects = ({projects}) => {

    if (!projects?.length) {
        return "";
    }

  return (
    <>
      {projects?.sort((a, b) => a.fields.order - b.fields.order).map((project) => {
        
        const projectImageLinks = project?.fields?.projectImage?.flat().map((x) => x?.fields?.file?.url);
        const isEven = project.fields.order % 2 === 0;
        return (
            <div key={project?.fields?.nameOfProject}
                className={`gap-10 ${styles['project-row']} ${isEven ? styles['project-row--even'] : styles['project-row--odd']}`}>
                <div className="flex-1">
                    <div className={styles['project-textwrapper__inner']}>
                        <h3 className={styles['project__title'] }>{project?.fields?.nameOfProject}</h3>
                        {project?.fields?.projectTags?.length && (
                            <ul className={styles['project-tags']}>
                                {
                                    project?.fields?.projectTags?.map((projectTag) => 
                                        <li key={projectTag?.toString()}>
                                            <span className={styles['project-tags__plus']}>
                                                <Image src={Plus} width={10} height={10} alt={"Techstack"} aria-hidden={ true } />
                                            </span>
                                            <span>{projectTag?.toString()}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        )}
                        <p className={ styles['project__summary'] }>{project?.fields?.projectDescription}</p>
                        <div className={styles['project-actions']}>
                            {project?.fields?.secondaryLink && project?.fields?.secondaryLinkLabel && (
                                <Link 
                                    target="_blank" 
                                    href={project?.fields.secondaryLink} 
                                    className={styles['project-actions__repolink']} 
                                    >
                                    <span>{project?.fields?.secondaryLinkLabel}</span>
                                </Link>
                            )}
                            {project?.fields?.primaryLink && project?.fields?.primaryLinkLabel && (
                                <Link
                                    href={project?.fields?.primaryLink}
                                    target="_blank"
                                    className={styles['project-actions__livelink']}
                                    rel="noopener noreferrer">
                                    {project?.fields?.primaryLinkLabel}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                {projectImageLinks?.length && (
                    <div className={styles['project-imagewrapper']}>
                        <ProjectCarousel slideImages={projectImageLinks} />
                    </div>
                )}
            </div>
            )
        }
    )}  
    </>
  )
}

export default Projects