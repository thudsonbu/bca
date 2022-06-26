import styles from './nav.module.scss';
import Link from 'next/link';
import items from './nav-items';
import icons from './nav-icons';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

const nav = ( props ) => {
  const [ mobile, setMobile ] = useState();
  const [ open, setOpen ]     = useState();

  useEffect( () => {
    if ( window ) {
      window.addEventListener( 'resize', e => {
        setMobile( window.innerWidth < 768 );
      })
    };

    setTimeout( () => {
      setMobile( window.innerWidth < 768 );
    }, 10 );
  }, [] );

  const left_links = items.map( item => {
    return (
      <Link href={ item.link }>
        { item.title }
      </Link>
    );
  });

  const right_links = icons.map( item => {
    return (
      <Link href={ item.link }>
        <>
          { item.icon }
        </>
      </Link>
    );
  });

  if ( mobile ) {
    const drawer_styles = open ? styles.drawer + ' ' + styles.drawer_open :
      styles.drawer;

    return (
      <nav className={styles.nav_mobile}>
        { !open &&
          <MenuIcon
            onClick={ () => setOpen( !open ) }
          />
        }
        { open &&
          <CloseIcon
            onClick={ () => setOpen( !open ) }
          />
        }
        <div className={drawer_styles}>
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
