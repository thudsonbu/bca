import styles from "./info-leaf.module.scss";

const InfoLeaf = ({ icon, title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leaf}>
          <div>{icon}</div>
        </div>
        <div className={styles.text_container}>
          <h3>{title}</h3>
          <hr />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoLeaf;
