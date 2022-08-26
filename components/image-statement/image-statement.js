import ArrowLink from "../arrow-link/arrow-link";

import styles from "./image-statement.module.scss";

const ImageStatement = ({ src, title, description, reverse, link }) => {
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
          { link && (
            <ArrowLink href={link}>Learn More</ArrowLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageStatement;
