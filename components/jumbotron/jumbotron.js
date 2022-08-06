import styles from './jumbotron.module.scss';

export default function Jumbotron({ title, description }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url("/jumbotron")` }}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

Jumbotron.defaultProps = {
  title: 'Bentley Consulting Association',
  description: `Bentley's premier consulting organization.`
};
