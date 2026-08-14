import styles from "../styles/Navbar.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import profileImage from '../public/main_image.png'
import { motion } from 'framer-motion'
import { useState} from 'react'
import { HamburgerMenu } from './HamburgerMenu/index'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false) // set off by default

  return (
    <header className={styles.header}>
      <div className={ styles['header-wrapper']}>
      <nav className={styles.nav}>
          <div className={styles['nav-header']}>
            <Link href="/" className={styles['nav-home-link']}>
              <div className={styles['nav-homelink__wrapper']}>
                <Image src={profileImage} width={48} height={48} alt="Rachel Wong's Portfolio home" aria-hidden={ false} />
                <span className={styles['nav-homelink__label']}>Rachel Wong</span>
              </div>
            </Link>
            <HamburgerMenu className={styles['hamburger-menu'] }/>
          </div>
        <div className="nav-list-container">
          <ul className={styles['nav-list']}>
              <li className={styles['nav-list-item']}>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className={styles['nav-list-item']}>
                <Link href="/blog">

                  Blog
                </Link>
              </li>
              <li className={styles['nav-list-item']}>
                <Link href="/illustration">
                  
                  Illustration
                  
                </Link>
              </li>
              <li className={styles['nav-list-item']}>
                <a target="_blank" href="http://www.github.com/rachelwong" rel="noopener noreferrer">
                  Github
                </a>
              </li>
              <li className={styles['nav-list-item']}>
                <a target="_blank" href="mailto:hello.rachelwong@gmail.com" rel="noopener noreferrer" title="Email to hello.rachelwong@gmail.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar
