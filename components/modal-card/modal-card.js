import styles       from './modal-card.module.scss';
import { useState } from 'react';

const ModalCard = ( props ) => {
  const [ open, setOpen ] = useState();

  return (
    <div className={styles.modal_card_container}>
      <div
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
          { props.title &&
            <h3>{ props.title}</h3>
          }
          { props.description &&
            <p>{ props.description}</p>
          }
        </div>
      </div>
      { open &&
          <div className={ styles.modal_background }>
            <div
              className={ styles.modal }
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
            </div>
          </div>
      }
    </div>
  );
};

export default ModalCard;
