import styles from "./image-grid.module.scss";
import ArrowLink from "../arrow-link/arrow-link";

import { useEffect, useRef } from "react";
import {scrollListener} from '../../utils/animations'

const ImageGrid = (props) => {
  const refs = useRef([]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      refs.current.forEach( ref => { 
        scrollListener( ref, 'fadeDownAnimation' );
      });
    });
    return () => {
      window.removeEventListener('scroll', () => {
        refs.current.forEach( ref => { 
          scrollListener( ref, 'fadeDownAnimation' );
        });
      })
    };
  })

  const sections = props.items.map((item, index) => {
    return (
      <div className={styles.row} key={item.src}>
        <div
          className={styles.image }
          style={{
            backgroundImage: "url(" + item.src + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div 
          className={styles.description + ' ' + 'start-invisible' }
          ref={el => refs.current[index] = el}
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
