import styles from './card.module.scss';
import Image from 'next/image';
import placeholder from '../../public/868690.png';

export default function Card({ title, description, src }) {
  return (
    <div className={styles.container}>
      {src && (
        <div className={styles.imageContainer}>
          <div
            className={styles.image}
            style={{
              backgroundImage: 'url(' +  src + ')',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></div>
        </div>
      )}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}

Card.defaultProps = {
  title: 'People Helped'
};
