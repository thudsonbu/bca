import styles from "./layout.module.scss";
import Nav from "../nav/nav";
import Footer from "../footer/footer";

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
