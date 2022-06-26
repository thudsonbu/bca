import styles from './layout.module.scss';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

const Layout = ( props ) => {

  return (
    <div className={styles.layout}>
      <Nav />
      <page className={styles.page}>
        {props.children}
      </page>
      <Footer />
    </div>
  );
};

export default Layout;
