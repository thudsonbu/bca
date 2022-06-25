import styles from './jumbotron.module.scss'

export default function Jumbotron({title, description}) {
  return (
    <div className={styles.container} style={{backgroundImage: `url("/jumbotron")` }}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

Jumbotron.defaultProps = {
  title: "Bently Consulting Group",
  description: "Betle Consulting Group is the leader in innovative consulting!"
}
