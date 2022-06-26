import styles from "./card.module.scss";
import Image from "next/image";
import placeholder from "../../public/868690.png";

export default function Card({ title, description, img }) {
  return (
    <div className={styles.container}>
      {img && (
        <div className={styles.imageContainer}>
          <Image layout="fill" src={placeholder} />
        </div>
      )}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}

Card.defaultProps = {
  title: "People Helped",
};
