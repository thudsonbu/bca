import styles from "./image-grid.module.scss";
import ArrowLink from "../arrow-link/arrow-link";

import { useEffect, useRef, useMemo, createRef } from "react";
import {scrollListener} from '../../utils/animations'
import { RefreshSharp } from "@mui/icons-material";

const ImageGrid = (props) => {

  const ref = useRef([]);
  console.log(ref)

  useEffect(() => {
      window.addEventListener('scroll', () => {
        scrollListener(ref.current, 'fadeDownAnimation')
      })
  })

  const sections = props.items.map((item, index) => {
    return (
      <div className={styles.row} key={item.src}>
        <div
          className={styles.image}
          style={{
            backgroundImage: "url(" + item.src + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div 
          className={styles.description} 
          ref={ref}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.link && (
            <ArrowLink href={item.link}>{item.link_text}</ArrowLink>
          )}
        </div>
      </div>
    );
  });

  return <div className={styles.content_grid}>{sections}</div>;
};

export default ImageGrid;
