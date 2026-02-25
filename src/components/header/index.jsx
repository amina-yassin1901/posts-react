import styles from "./styles.module.css";
import Logo from "../logo";
import HeaderList from "../headerList";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderList />
    </header>
  );
}
export default Header;
