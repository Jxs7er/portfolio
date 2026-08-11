import styles from "./Header.module.css";
import { Logo, MenusLinks, ThemeButton } from "./components";

const Header = () => {
  return (
    <nav className={styles.nav}>
      {/* Menu Links */}
      <MenusLinks />

      {/* Logo */}
      <Logo />

      {/* Theme */}
      <ThemeButton />
    </nav>
  );
};
export default Header;
