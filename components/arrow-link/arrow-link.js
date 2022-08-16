import styles from "./arrow-link.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ArrowLink = ({ href, color, children }) => {
  const router = useRouter();

  const sty =
    color === "white"
      ? styles.arrow_link + " " + styles.white
      : styles.arrow_link;

  return (
    <div className={sty} onClick={() => router.push(href)}>
      <Link href={href}>{children}</Link>
      <ArrowForwardIcon />
    </div>
  );
};

export default ArrowLink;
