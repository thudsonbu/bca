import styles from './modal-card.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ModalCard = ( props ) => {
  const [ open, setOpen ] = useState();

  return (
    <div className={styles.modal_card_container}>
      <motion.div
        className={styles.modal_card}
        onClick={ () => setOpen( true ) }
      >
        <div
          className={ styles.image }
          style={{
            backgroundImage: 'url(' +  '../../banana.jpeg' + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
        </div>
        <div>
          <h3>{ props.title || 'title' }</h3>
          <p>{ props.description || 'description' }</p>
        </div>
      </motion.div>
      <AnimatePresence>
        { open &&
          <motion.div
            className={ styles.modal }
            initial={{
              opacity: 0,
              width: '33%',
              padding: '1em',
              top: 0
            }}
            animate={{
              opacity: 1,
              x: 'calc(50vh - 100)',
              y: 'calc(50vh - 200)',
              height: 800,
              width: 400
            }}
            exit={{
              opacity: 0,
              top: 0
            }}
            onClick={ () => setOpen( false ) }
          >
            <div
              className={ styles.image }
              style={{
                backgroundImage: 'url(' +  '../../banana.jpeg' + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            ></div>
            <div>
              <h3>{ props.title || 'title' }</h3>
              <p>{ props.description || 'description' }</p>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
};

export default ModalCard;
