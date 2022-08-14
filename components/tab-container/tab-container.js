import styles from "./tab-container.module.scss";
import { useState } from "react";

const TabContainer = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const buttons = [];

  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].name === tabs[currentTab].name) {
      buttons.push(
        <button className={styles.active_button}>{tabs[i].name}</button>
      );
    } else {
      buttons.push(
        <button onClick={() => setCurrentTab(i)}>{tabs[i].name}</button>
      );
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.tab_buttons}>{buttons}</div>
        <hr />
        <div className={styles.tab}>{tabs[currentTab].component}</div>
      </div>
    </div>
  );
};

export default TabContainer;
