import styles from './modal.module.scss';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ( props ) => {

  if ( props.open ) {
    return (
      <>
        <div
          className={styles.container}
          onClick={ () => props.setOpen( !open ) }
        ></div>
        <div className={styles.modal}>
          <CloseIcon
            className={styles.close_button}
            onClick={ () => props.setOpen( false ) }
          />
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
