import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/Home.module.scss';
import MiniCarousel from './MiniCarousel';
import Plus from '../public/plus-solid.svg'

const Projects = ({projects}) => {

    if (!projects?.length) {
        return "";
    }

  return (
    <>
      {projects?.sort((a, b) => a.fields.order - b.fields.order).map((project) => {
        
        const projectImageLinks = project?.fields?.projectImage?.flat().map((x) => x?.fields?.file?.url);
        
        return (
            <Row key={project?.fields?.nameOfProject} 
                className={`${styles['project-row']} ${project.fields.order % 2 === 0 ? styles['project-row--even'] : styles['project-row--odd']}`}>
                <Col lg={6}>
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
                                    ref="noopener noreferrer">
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
                </Col>
                {projectImageLinks?.length && (
                    <Col lg={6} className={styles['project-imagewrapper']}>
                        <MiniCarousel slideImages={projectImageLinks} />   
                    </Col>
                )}                
            </Row>
            )
        }
    )}  
    </>
  )
}

export default Projects