import styles from './footer.module.scss';
import Link from 'next/link';
import icons from '../nav/nav-icons';
import items from '../nav/nav-items';

const Footer = () => {
  const icon_links = icons.map( item => {
    return (
      <Link href={ item.link } key={ item.link }>
        <>
          { item.icon }
        </>
      </Link>
    );
  });

  const regular_links = items.map( item => {
    return (
      <Link href={ item.link } key={ item.link }>
        { item.title }
      </Link>
    );
  });

  return (
    <div className={ styles.footer }>
      <div className={ styles.links }>
        { regular_links }
      </div>
      <div className={ styles.icons }>
        { icon_links }
      </div>
    </div>
  );
};

export default Footer;
