import styles from "./section-subtitle.module.scss";

const SectionSubtitle = ({ title, alignment }) => {
  const sty =
    alignment === "centered"
      ? styles.container + " " + styles.centered
      : styles.container;

  return (
    <div className={sty}>
      <div className={styles.content}>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default SectionSubtitle;
