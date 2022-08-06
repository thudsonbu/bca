import styles from './statement.module.scss';

const Statement = ( props ) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <div
          className={styles.image}
          style={{
            backgroundImage: 'url(' +  props.src + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
      </div>
      <div className={styles.content}>
        <h1>{ props.title }</h1>
        <p>{ props.description }</p>
      </div>
    </div>
  );
};

export default Statement;