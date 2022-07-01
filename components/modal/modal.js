import styles from './modal.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Modal = ( props ) => {
  const [ open, setOpen ] = useState( true );

  if ( open ) {
    return (
      <>
        <div
          className={styles.container}
          onClick={ () => setOpen( !open ) }
        ></div>
        <div className={styles.modal}>
          <div
            className={styles.image}
            style={{
              backgroundImage: 'url(' +  props.src + ')',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></div>
          <div className={styles.description}>
            <h2>{ props.name }</h2>
            <p className={styles.title}>{ props.title }</p>
            <p>{ props.description }</p>
            <div className={styles.icons}>
              <Link href={props.linkedinLink}>
                <LinkedInIcon />
              </Link>
              <Link href={props.emailLink}>
                <EmailIcon />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Modal;
