import styles from './content-grid.module.scss';
import ArrowLink from '../arrow-link/arrow-link';

const ContentGrid = ( props ) => {

  const sections = props.items.map( item => {
    return (
      <div className={styles.row}>
        <img src={item.src}/>
        <div className={styles.description}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          { item.link &&
            <ArrowLink href={item.link}>
              { item.link_text }
            </ArrowLink>
          }
        </div>
      </div>
    )
  });

  return (
    <div className={styles.content_grid}>
      { sections }
    </div>
  );
};

export default ContentGrid;
