import styles from "./card-grid.module.scss";

const CardGrid = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default CardGrid;
