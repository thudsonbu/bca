import styles from './nav.module.scss';
import Link from 'next/link';
import items from './nav-items';
import icons from './nav-icons';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Nav = () => {
  const [ mobile, setMobile ] = useState();
  const [ open, setOpen ]     = useState();
  const [ hidden, setHidden ] = useState( false );

  const router = useRouter();

  // determine mobile or desktop nav style
  useEffect( () => {
    if ( window ) {
      window.addEventListener( 'resize', () => {
        setMobile( window.innerWidth < 768 );
      });
    };

    setTimeout( () => {
      setMobile( window.innerWidth < 768 );
    }, 10 );
  }, [] );

  // support navbar show and hide on scroll
  useEffect( () => {
    setTimeout( () => {
      let scrollY = window.scrollY;

      window.addEventListener( 'scroll', () => {
        if ( window.scrollY > scrollY + 50 ) {
          scrollY = window.scrollY;
          setHidden( true );
        }

        if ( window.scrollY < scrollY - 50 ) {
          scrollY = window.scrollY;
          setHidden( false );
        }
      });
    }, 0 );
  }, [] );

  const regular_links = items.map( item => {
    return (
      <Link href={ item.link } key={ item.link }>
        { item.title }
      </Link>
    );
  });

  const icon_links = icons.map( item => {
    return (
      <Link href={ item.link } key={ item.link }>
        <>
          { item.icon }
        </>
      </Link>
    );
  });

  if ( mobile ) {
    const drawer_styles = open ? styles.drawer + ' ' + styles.drawer_open :
      styles.drawer;

    const nav_classes = hidden ? styles.nav_mobile + ' ' + styles.nav_hidden :
      styles.nav_mobile;

    return (
      <nav className={nav_classes}>
        <div
          onClick={ () => router.push('/') }
          className={styles.image}
          style={{
            backgroundImage: 'url( ../../images/Logo.png )',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
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
          <div className={styles.links}>
            { regular_links }
          </div>
          <div className={styles.icons}>
            { icon_links }
          </div>
        </div>
      </nav>
    );
  }

  const nav_classes = hidden ? styles.nav + ' ' + styles.nav_hidden :
    styles.nav;

  return (
    <nav className={nav_classes}>
      <div className={styles.link_container}>
        <div
          onClick={ () => router.push('/') }
          className={styles.image}
          style={{
            backgroundImage: 'url( ../../images/Logo.png )',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
        { regular_links }
      </div>
      <div className={styles.icon_container}>
        { icon_links }
      </div>
    </nav>
  );
};

export default Nav;
