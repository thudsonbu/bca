import ArrowLink from "../arrow-link/arrow-link";

import styles    from './statement.module.scss';

const Statement = ({ text, link, linkText, linkSize }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>{ text }</p>
        { link && linkText && (
          <div className={styles.link_container}>
            <ArrowLink href={link} size={linkSize}>{linkText}</ArrowLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Statement;
