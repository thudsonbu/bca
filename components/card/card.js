import styles from "./card.module.scss";

export default function Card({ number, title }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}

Card.defaultProps = {
  title: "People Helped",
};
