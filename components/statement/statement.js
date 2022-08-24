import styles from './statement.module.scss';

const Statement = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>{ text }</p>
      </div>
    </div>
  );
}

export default Statement;
