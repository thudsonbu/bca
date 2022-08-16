import "../styles/global.css";
import styles from "../styles/app.module.scss";
import { motion } from "framer-motion";
import Layout from "../components/layout/layout";

const App = ({ Component, pageProps }) => {
  const x = 0;

  return (
    <Layout>
      <motion.div className={styles.page} animate={{ x }}>
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
};

export default App;
