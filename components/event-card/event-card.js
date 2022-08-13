import styles from './event-card.module.scss';

const EventCard = ({ title, date, src, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          className={styles.image}
          style={{
            backgroundImage: 'url(' + src + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
        </div>
        <div className={styles.description}>
          <h3>{ title }</h3>
          <p><i>{ date.toLocaleString() }</i></p>
          <p>{ description }</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
