import styles from './chip.module.scss'

export default function Chip({number, title}) {
  if(number){
    <div className={styles.container}>{title}</div>
  } else {
    <div className={styles.container}>{title}</div>
  }

}

Chip.defaultProps = {
  title: "Bently Consulting Group"
}
