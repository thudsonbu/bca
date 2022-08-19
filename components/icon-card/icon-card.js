import styles from "./icon-card.module.scss";

const IconCard = ({ icon, title, description, color }) => {
  const sty = styles.container + ' ' + styles[ color ];

  return (
    <div className={sty}>
      <div className={styles.icon_container}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default IconCard;
