import styles from "./nav.module.scss";
import Link from "next/link";
import items from "./nav-items";
import icons from "./nav-icons";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const [mobile, setMobile] = useState();
  const [open, setOpen] = useState();
  const [hidden, setHidden] = useState(false);
  const [sideItems, setSideItems] = useState([]);
  const [shifted, setShifted] = useState(false);

  const router = useRouter();

  // determine mobile or desktop nav style
  useEffect(() => {
    if (window) {
      window.addEventListener("resize", () => {
        setMobile(window.innerWidth < 768);
      });
    }

    setTimeout(() => {
      setMobile(window.innerWidth < 768);
    }, 10);
  }, []);

  // support navbar show and hide on scroll
  useEffect(() => {
    setTimeout(() => {
      let scrollY = window.scrollY;

      window.addEventListener("scroll", () => {
        if (window.scrollY > scrollY + 50) {
          scrollY = window.scrollY;
          setHidden(true);
        }

        if (window.scrollY < scrollY - 50) {
          scrollY = window.scrollY;
          setHidden(false);
        }
      });
    }, 0);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.body.style.overflow = "hidden";
      });
    } else {
      setTimeout(() => {
        document.body.style["overflow-y"] = "scroll";
      });
    }
  }, [open]);

  const iconLinks = icons.map((item) => {
    return (
      <div onClick={() => setOpen(false)} key={item.link}>
        <Link href={item.link}>
          <>{item.icon}</>
        </Link>
      </div>
    );
  });

  if (mobile) {
    const shift = (newItems) => {
      setSideItems(newItems);
      setShifted(true);
    };

    const handleClose = () => {
      setSideItems([]);
      setShifted(false);
      setOpen(false);
    };

    const sideLinks = sideItems.map((item) => {
      return (
        <div
          onClick={() => handleClose(false)}
          key={item.link}
          className={styles.link}
        >
          <Link href={item.link} key={item.link}>
            {item.title}
          </Link>
        </div>
      );
    });

    const links = items.map((item) => {
      if (item.sublinks) {
        return (
          <div
            onClick={() => shift(item.sublinks)}
            key={item.link}
            className={styles.link}
          >
            <button>
              {item.title}
              <ArrowForwardIosIcon />
            </button>
          </div>
        );
      }

      return (
        <div
          onClick={() => handleClose(false)}
          key={item.link}
          className={styles.link}
        >
          <Link href={item.link} key={item.link}>
            {item.title}
          </Link>
        </div>
      );
    });

    let drawerStyles = styles.drawer;

    if (open) {
      drawerStyles += " " + styles.drawer_open;
    }

    if (shifted) {
      drawerStyles += " " + styles.drawer_shifted;
    }

    const navClasses = hidden
      ? styles.nav_mobile + " " + styles.nav_hidden
      : styles.nav_mobile;

    return (
      <nav className={navClasses}>
        <div
          onClick={() => router.push("/")}
          className={styles.image}
          style={{
            backgroundImage: "url( ../../images/BCALogo.png )",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {!open && <MenuIcon onClick={() => setOpen(true)} />}
        {open && <CloseIcon onClick={() => handleClose()} />}
        <div className={drawerStyles}>
          <div className={styles.center}>
            <div className={styles.links}>{links}</div>
            <div className={styles.icons}>{iconLinks}</div>
          </div>
          <div className={styles.side}>
            <div className={styles.links}>{sideLinks}</div>
          </div>
        </div>
      </nav>
    );
  } else {
    const regular_links = items.map((item) => {
      let sublinks;

      if (item.sublinks) {
        sublinks = item.sublinks.map((l) => {
          return (
            <Link href={l.link} key={l.link}>
              {l.title}
            </Link>
          );
        });

        return (
          <div className={styles.link_group}>
            <div key={item.link} className={styles.link}>
              {item.sublinks && (
                <div className={styles.sublinks}>{sublinks}</div>
              )}
              <button>{item.title}</button>
            </div>
          </div>
        );
      }

      return (
        <div key={item.link} className={styles.link}>
          <Link href={item.link} key={item.link}>
            {item.title}
          </Link>
          {item.sublinks && <div className={styles.sublinks}>{sublinks}</div>}
        </div>
      );
    });

    const navClasses = hidden
      ? styles.nav + " " + styles.nav_hidden
      : styles.nav;

    return (
      <nav className={navClasses}>
        <div className={styles.link_container}>
          <div
            onClick={() => router.push("/")}
            className={styles.image}
            style={{
              backgroundImage: "url( ../../images/BCALogo.png )",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          {regular_links}
        </div>
        <div className={styles.icon_container}>{iconLinks}</div>
      </nav>
    );
  }
};

export default Nav;
