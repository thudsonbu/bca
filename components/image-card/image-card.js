import styles from "./image-card.module.scss";
import ArrowLink from "../arrow-link/arrow-link";

const ImageCard = ({ title, eyebrow, description, src, href }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage: "url(" + src + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className={styles.content}>
        <h1>{title}</h1>
        {eyebrow && (
          <p>
            <i>{eyebrow}</i>
          </p>
        )}
        <h2>{description}</h2>
        {href && (
          <ArrowLink href={href} color="white">
            {title}
          </ArrowLink>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
