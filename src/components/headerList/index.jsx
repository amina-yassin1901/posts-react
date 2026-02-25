import styles from "./styles.module.css";

function HeaderList() {
  const headerList = ["Главная", "Музыка", "Сообщества", "Друзья"];

  return (
    <ul className={styles.list}>
      {headerList.map((item, index) => {
        return (
          <li className={styles.item} key={index}>
            <a href="#">{item}</a>
          </li>
        );
      })}
    </ul>
  );
}
export default HeaderList;
