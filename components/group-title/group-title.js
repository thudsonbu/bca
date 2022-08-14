import styles from './group-title.module.scss';

const GroupTitle = ({ title }) => {
  return (
    <div className={ styles.container }>
      <div className={ styles.content}>
        <h1>{ title }</h1>
      </div>
    </div>
  );
};

export default GroupTitle;
