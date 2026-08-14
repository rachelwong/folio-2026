import { createClient } from 'contentful'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Carousel from '../components/Carousel'
import Piano from '../components/Piano'
import Project from '../components/Project'
import Shot from '../components/Shot'
import "../node_modules/slick-carousel/slick/slick-theme.css"
import "../node_modules/slick-carousel/slick/slick.css"
import Arrow from '../public/arrow.svg'
import Braces from '../public/braces.svg'
import Circle from '../public/circle.svg'
import CSS3Logo from '../public/css3_logo.svg'
import Funct from '../public/funct.svg'
import GithubLogo from '../public/github_logo.svg'
import Hex from '../public/hex.svg'
import HTML5Logo from '../public/html_logo.svg'
import IllustratorLogo from '../public/illustrator_logo.svg'
import JavascriptLogo from '../public/js_logo.svg'
import MongodbLogo from '../public/mongodb_logo.svg'
import PhotoshopLogo from '../public/photoshop_logo.svg'
import ReactLogo from '../public/react_logo.svg'
import SassLogo from '../public/sass_logo.svg'
import styles from '../styles/Home.module.scss'

// does not require pre-renderings
export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_CDN_API
  })
  const res = await client.getEntries({ content_type: 'shot' })
  const projectsRes = await client.getEntries({ content_type: 'project' })

  return {
    props: {
      shots: res.items,
      projects: projectsRes.items,
    },
    revalidate: 1
  }
}

export default function Home({ shots, projects }) {

  const titleLine1 = "Hello I'm Rachel."
  const titleLine2 = "I am a software developer from Brisbane."
  const titleLine3 = "I enjoy building interfaces & learning new tech."

  // variants for framer motion
  const sentence = {
    hidden: {
      opacity: 1,
    },
    visible: {
      transition: {
        opacity: 1,
        delay: .18,
        staggerChildren: 0.05
      }
    }
  }

  const letter = {
      hidden: {
        opacity: 0,
        // y: 100
      },
      visible: {
        // y: 0,
        opacity: 1,
      }
  }
  if (!shots.length) return ""
  return (
    <div className={styles.container}>
      <Head>
        <title>Rachel Wong software developer</title>
        <meta name="description" content="software developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles['home-header']}>
        <motion.div className={styles['home-header__graphic']}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.5 }}>
          <motion.div className={`${styles['home__header__braces1']} ${styles['home-header__svgs']}`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.6,
            }}
            transition={{
              duration: 2,
              delay: 0.5
            }} >
            <Image src={Braces} width={300} height={ 300} alt="" aria-hidden={true} loading='eager' />
          </motion.div>
          <motion.div
            className={`${styles['home__header__star1']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1.5, delay: 1}}
          >
            <Image src={Hex} width={300} height={300} alt="" aria-hidden={ true} />
          </motion.div>
          <motion.div className={`${styles['home__header__hex2']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1.3, delay: 1.5}}
          >
            <Image src={Hex} width={300} height={300} alt="" aria-hidden={ true } loading='eager' />
          </motion.div>
          <motion.div className={`${styles['home__header__circle1']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: .5 }}
            transition={{duration: 1.3, delay: 1.5}}
          >
            <Image src={Circle} width={300} height={300} alt="" aria-hidden={ true }/>
          </motion.div>
          <motion.div className={`${styles['home__header__circle2']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1.3  , delay: 1.3}}
          >
            <Image src={Circle} width={300} height={300} alt="" aria-hidden={ true } loading='eager' />
          </motion.div>
          <motion.div className={`${styles['home__header__circle3']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: .8 }}
            transition={{duration: 1.5, delay: 1}}
          >
            <Image src={Circle} width={300} height={300} alt="" aria-hidden={ true } loading='eager' />
          </motion.div>
          <motion.div className={`${styles['home__header__funct1']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: .3 }}
            transition={{duration: 1.5, delay: 1}}
          >
            <Image src={Funct} width={10} height={10} alt="" aria-hidden={ true } loading='eager' />
          </motion.div>
          <motion.div className={`${styles['home__header__arrow1']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: .3 }}
            transition={{duration: 1.5, delay: 1}}
          >
            <Image src={Arrow} width={300} height={300} alt="" aria-hidden={ true } loading='eager'/>
          </motion.div>
          <motion.div
            className={`${styles['home__header__circle4']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: .85 }}
            transition={{duration: 1.5, delay: 1}}
          >
            <Image src={Circle} width={30} height={30} alt="" aria-hidden={ true} loading='eager' />
          </motion.div>
        </motion.div>
        <div className={styles['home-header__wrapper']}>
          <div className={styles['home-header__text']}>
            <div className={ styles['home-header__text-wrapper']}>
              <div className={styles['home-header__text__line']}>
                <motion.div>
                  <motion.div className={styles['home-header__text__line-inner']}
                    initial="hidden"
                    animate="visible"
                    variants={sentence}>
                    {titleLine1.split("").map((char, index) => {
                      return (
                        <motion.span key={char + "-" + index} variants={letter}>{ char }</motion.span>
                      )
                    })}
                  </motion.div>
                  <div className={styles['home-header__text__mask']}>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: .5}} className={styles['home-header__text__line--smaller']}>
                      { titleLine2}
                    </motion.div>
                  </div>
                  <div className={styles['home-header__text__mask']}>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1}} className={styles['home-header__text__line--blurb']}>
                    { titleLine3 }
                    </motion.div>
                  </div>
                  <div className={styles['home-header__text__mask--btn']}>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.5}} className={styles['home-header__text__line--blurb']}>
                      <Link
                        href="/RachelWong_CV.pdf"
                        target="_blank"
                        className={styles['home-header__text__btn']}>
                          Download CV
                        </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className={styles['home-header__visuals']}>
            <Piano />
          </div>
        </div>
        <Carousel />
      </div>

      <Container className={styles.projects}>
        <div className={styles['projects-description']}>
          <h3 id="#projects">Projects</h3>
        </div>
      <Project projects={projects} />

    </Container>

      <div className={styles['shots-container']}>
        <div className={styles['shots-summary']}>
          <h3>Practice Shots</h3>
          <p>I learn by making incremental steps, these are some of my smaller projects to help me build a solid foundation understanding of code flow, fundamental concepts and problem solving. </p>
        </div>
        <div className={styles['shots-wrapper']}>
          {shots.length > 0 && shots.map((shot, shotIndex) => (
            <Shot shot={shot} key={ shotIndex}/>
          ))}
        </div>
      </div>

      <div className={styles['about-container']}>
        <div className={styles['about-summary']}>
          <h3>About me</h3>
          <p>I am a software developer based in Brisbane. I have five years of hands-on experience building business-critical user journeys for web, iOS and Android platforms. Prior to getting on the tools, I've worked for a number of years in administration for the public service and university student administration. In a previous life, I also did freelance illustration for local indy filmmakers and storytellers. </p>
          <p>I enjoy the process of translating a static, flat design into a living, functioning product in the hands of the customer-user. </p>
         <p>I am at my best learning and building with a team of builders.</p>
        </div>
        <ul className={styles['about-language-wrapper']}>
          <li>
            <Image src={HTML5Logo} width={80} height={80 } alt="HTML5" />
          </li>
          <li>
            <Image src={CSS3Logo} width={80} height={80 }  alt="CSS3" />
          </li>
          <li>
            <Image src={JavascriptLogo} width={80} height={80 }  alt="Javascript" />
          </li>
          <li>
            <Image src={SassLogo} width={80} height={80 } alt="Sass" />
          </li>
          <li>
            <Image src={ReactLogo} width={80} height={80 } alt="React" />
          </li>
          <li>
            <Image src={GithubLogo} width={80} height={80 } alt="Github" />
          </li>
          <li>
            <Image src={MongodbLogo} width={80} height={80 } alt="Mongo db" />
          </li>
          <li>
            <Image src={PhotoshopLogo} width={80} height={80 } alt="Photoshop" />
          </li>
          <li>
            <Image src={IllustratorLogo} width={80} height={80 }  alt="Illustrator" />
          </li>

        </ul>
      </div>

    </div>
  );
}
