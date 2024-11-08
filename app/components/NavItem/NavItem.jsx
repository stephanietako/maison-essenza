import Link from "next/link";
// Styles
import styles from "./styles.module.scss";

const NavItem = ({ name, href, active }) => {
  return (
    <Link href={href}>
      <span className={`${styles.nav__item} ${active ? styles.active : ""}`}>
        {name}
      </span>
    </Link>
  );
};

export default NavItem;
