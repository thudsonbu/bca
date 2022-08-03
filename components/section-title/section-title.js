import styles from './section-title.module.scss';

const SectionTitle = ( props ) => {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default SectionTitle;
