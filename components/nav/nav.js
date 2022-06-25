import styles from './nav.module.scss';
import Link from 'next/link';
import items from './nav-items';
import icons from './nav-icons';
import { useEffect, useState } from 'react';

const nav = ( props ) => {
  const [ mobile, setMobile ]   = useState();
  const [ loading, setLoading ] = useState();

  useEffect( () => {
    if ( window ) {
      setMobile( window.screen.width < 768 );
      setLoading( false );
    };
  }, [] );

  const left_links = items.map( item => {
    return (
      <Link href={ item.link }>
        { item.title }
      </Link>
    );
  });

  const right_links = icons.map( item => {
    return;
    return (
      <Link href={ item.link }>
        { item.icon }
      </Link>
    );
  })

  if ( mobile ) {
    return (
      <nav className={styles.nav_mobile}>
        <div>
          { left_links }
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.link_container}>
        { left_links }
      </div>
      <div className={styles.icon_container}>
        { right_links }
      </div>
    </nav>
  );
};

export default nav;
