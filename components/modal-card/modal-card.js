import styles from './modal-card.module.scss';
import { useState, useEffect } from 'react';
import Modal from '../modal/modal';

const ModalCard = ( props ) => {
  const [ open, setOpen ] = useState();

  useEffect( () => {
    if ( open ) {
      setTimeout( () => {
        document.body.style.overflow = 'hidden';
      });
    } else {
      setTimeout( () => {
        document.body.style['overflow-y'] = 'scroll';
      });
    }
  }, [ open ] );

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        onClick={ () => setOpen( !open ) }
      >
        <div
          className={ styles.image }
          style={{
            backgroundImage: 'url(' + props.src + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
        </div>
        <div className={ styles.description }>
          <h2>{ props.name }</h2>
          <div className={ styles.rule }></div>
          <p>{ props.title }</p>
        </div>
      </div>
      <Modal
        name={ props.name }
        title={ props.title }
        description={ props.description }
        linkedinLink={ props.linkedinLink }
        src={ props.src }
        emailLink={ props.emailLink }
        setOpen={setOpen}
        open={open}
      />
    </div>
  );
};

export default ModalCard;
