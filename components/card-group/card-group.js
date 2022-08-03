import styles from './card-group.module.scss';

const CardGroup = ({ children, columns, title }) => {
  let styleByColumns;

  switch ( columns ) {
    case 1:
      styleByColumns = styles.card_container_one;
      break;
    case 2:
      styleByColumns = styles.card_container_two;
      break;
    case 3:
      styleByColumns = styles.card_container_three;
      break;
    case 4:
      styleByColumns = styles.card_container_four;
      break;
    default:
      styleByColumns = styles.card_container_four;
      break;
  }

  return (
    <div>
      <h1>{title}</h1>
      <div className={styleByColumns}>{children}</div>
    </div>
  );
};

export default CardGroup;
