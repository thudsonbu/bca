import styles from "./timeline.module.scss";

const Timeline = ({ events, title }) => {
  const eventCards = events.map((e) => {
    return (
      <div className={styles.section} key={e.title}>
        <div className={styles.whitespace}></div>
        <div className={styles.line_container}>
          <div className={styles.line}>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.line_tracker}></div>
        </div>
        <div className={styles.card}>
          <h2>{e.title}</h2>
          <hr />
          <p>
            <i>{e.eyebrow}</i>
          </p>
          <p>{e.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{title}</h1>
        {eventCards}
      </div>
    </div>
  );
};

export default Timeline;
