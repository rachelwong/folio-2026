import styles from "../styles/Piano.module.scss";
import { motion } from 'framer-motion'
import useSound from 'use-sound'

const Piano = () => {

  const notes = {
    aKey: '/notes/a.mp3',
    afKey: '/notes/af.mp3',
    bKey: '/notes/b.mp3',
    bfKey: '/notes/bf.mp3',
    cKey: '/notes/c.mp3',
    dKey: '/notes/d.mp3',
    dfKey: '/notes/df.mp3',
    eKey: '/notes/e.mp3',
    efKey: '/notes/ef.mp3',
    fKey: '/notes/f.mp3',
    gKey: '/notes/g.mp3',
    gfKey: '/notes/gf.mp3',
  }

  const [playA] = useSound(notes.aKey)
  const [playAf] = useSound(notes.afKey)
  const [playB] = useSound(notes.bKey)
  const [playBf] = useSound(notes.bfKey)
  const [playC] = useSound(notes.cKey)
  const [playD] = useSound(notes.dKey)
  const [playDf] = useSound(notes.dfKey)
  const [playE] = useSound(notes.eKey)
  const [playEf] = useSound(notes.efKey)
  const [playF] = useSound(notes.fKey)
  const [playG] = useSound(notes.gKey)
  const [playGf] = useSound(notes.gfKey)

  return (
    <motion.div className={styles.piano}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -25 }}
      transition={{
        delay: .4,
        duration: .3,
        ease: 'easeIn'
      }}
      aria-hidden={true }
    >
      <div className={styles.piano__inner}>
        <div className={styles['piano-screen']}>
          <div className={styles.piano__screen__glare}></div>
          <ul className={styles.piano__screen__beats}>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
          </ul>
          <ul className={styles.piano__screen__quavers}>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
            <li className={`${styles.beat} ${styles.odd}`}></li>
          </ul>
          <ul className={styles.piano__screen__minims}>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
          </ul>
        </div>
        <div className={styles['piano-keys__wrapper']}>
          <ul className={styles['piano-keys']}>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['c-nat']}`} onClick={ playC}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['d-sharp']}`} onClick={ playDf}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['d-nat']}`} onClick={ playD }></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['e-sharp']}`} onClick={ playEf}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['e-nat']}`} onClick={ playE}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['f-nat']}`} onClick={ playF}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['f-sharp']}`} onClick={ playGf}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['g-nat']}`} onClick={playG}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['g-sharp']}`} onClick={ playAf}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['a-nat']}`} onClick={ playA}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['a-sharp']}`} onClick={ playBf}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['b-nat']}`} onClick={ playB}></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Piano
