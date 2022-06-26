import styles from './arrow-link.module.scss';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ArrowLink = ( props ) => {
  return (
    <div className={ styles.arrow_link }>
      <Link href={ props.href }>
        { props.children }
      </Link>
      <ArrowForwardIcon/>
    </div>
  )
}

export default ArrowLink;
