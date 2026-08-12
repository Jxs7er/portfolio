import LanguageSwitcher from "../forms/select/LanguageSwitcher";
import styles from "./Header.module.css";
import { Logo, MenusLinks } from "./components";

const Header = () => {
  return (
    <nav className={styles.nav}>
      {/* Menu Links */}
      <MenusLinks />

      {/* <div className="hidden md:flex justify-center items-center"> */}
        <LanguageSwitcher />
      {/* </div> */}
      {/* Logo */}
      <Logo />

      {/* Theme */}
      {/* <ThemeButton /> */}
    </nav>
  );
};
export default Header;
