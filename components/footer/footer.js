import styles from './footer.module.scss';
import Link from 'next/link';
import icons from '../nav/nav-icons';
import items from '../nav/nav-items';

const Footer = ( props ) => {

  const icon_links = icons.map( item => {
    return (
      <Link href={ item.link }>
        <>
          { item.icon }
        </>
      </Link>
    );
  });

  const regular_links = items.map( item => {
    return (
      <Link href={ item.link }>
        { item.title }
      </Link>
    );
  });

  return (
    <div className={ styles.footer }>
      <div>
        { regular_links }
      </div>
      <div>
        { icon_links }
      </div>
    </div>
  );
};

export default Footer;
