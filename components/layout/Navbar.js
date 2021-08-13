import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./layout.module.scss";

function Navbar() {
  const [Scroll, setScroll] = useState(false);
  const [NavbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const NavLink = (props) => {
    return (
      <li>
        <Link href={props.href}>
          <a>{props.children}</a>
        </Link>
      </li>
    );
  };
  return (
    <nav className={`${styles.navbar} ${Scroll ? styles.scrolled : ""} ${NavbarActive ? styles.active : ""}`}>
      <div className={styles.logo}>
        <h1>devansh.developer</h1>
      </div>
      <div className={styles.toggle} onClick={() => setNavbarActive(!NavbarActive)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.navlinks}>
        <ul>
          <NavLink href="./">Home</NavLink>
          <NavLink href="./">Home</NavLink>
          <NavLink href="./">Home</NavLink>
          <NavLink href="./">Home</NavLink>
          <NavLink href="./">Home</NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
