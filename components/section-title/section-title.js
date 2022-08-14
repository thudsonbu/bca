import styles from './section-title.module.scss';

const SectionTitle = ({ title, background }) => {
  let sty = styles.container;

  if ( background === 'white' ) {
    sty = sty + ' ' + styles.white;
  } else if ( background === 'blue' ) {
    sty = sty + ' ' + styles.blue;
  };

  return (
    <div className={sty}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitle;
