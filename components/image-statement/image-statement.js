import styles from "./image-statement.module.scss";

const ImageStatement = ({ src, title, description, reverse }) => {
  const sty = reverse
    ? styles.container + " " + styles.reverse
    : styles.container;

  return (
    <div className={sty}>
      <div className={styles.content}>
        {src && (
          <div
            className={styles.image}
            style={{
              backgroundImage: "url(" + src + ")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        )}
        <div className={styles.text}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageStatement;
