import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import styles from '../styles/PostEntry.module.scss';
import DateFormat from '../utils/DateFormatter';

const PostEntry = ({ post }) => {
  const { title, slug, publishedDate, tags, blurb } = post.fields
  const parsedDate = format(parseISO(publishedDate), DateFormat.VERBOSE)

  return (
    <div className={styles['post-entry-wrapper']}
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5}}
    >
      <time className={styles['post-entry-date']} dateTime={publishedDate}>{parsedDate}</time>
      <Link href={'/blog/' + slug} rel=" noopener noreferrer" className={styles['post-entry-title__link']}>

        <h3 className={styles['post-entry-title']}>{title}</h3>

      </Link>
      <ul className={ styles['post-entry-tags']}>{tags.length > 0 && tags.map((tag, tagIndex) => (
        <li key={ tagIndex }><span>{ tag }</span></li>
      ))}</ul>
      <p className={ styles['post-blurb']}>{ blurb }</p>
    </div>
  );
}

export default PostEntry
