import styles from "./arrow-link.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ArrowLink = ({ href, color, size, children }) => {
  const router = useRouter();

  let sty = styles.arrow_link;

  if ( color === "white" ) {
    sty += " " + styles.white;
  }

  if ( size === "large" ) {
    sty += " " + styles.large;
  }

  return (
    <div className={sty} onClick={() => router.push(href)}>
      <Link href={href}>{children}</Link>
      <ArrowForwardIcon />
    </div>
  );
};

export default ArrowLink;
