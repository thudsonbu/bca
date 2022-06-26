import styles from './arrow-link.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ArrowLink = ( props ) => {
  const router = useRouter();

  return (
    <div
      className={ styles.arrow_link }
      onClick={ () => router.push( props.href ) }
    >
      <Link href={ props.href }>
        { props.children }
      </Link>
      <ArrowForwardIcon/>
    </div>
  )
}

export default ArrowLink;
