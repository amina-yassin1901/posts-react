import userLogo from "/src/assets/userlogo.svg";
import styles from "./styles.module.css";

function Post({ title, text, id }) {
  return (
    <li className={styles.item}>
      <div className={styles.logo}>
        <img src={userLogo}></img>
        <p>User logo</p>
      </div>
      <div className={styles.content}>
        <h2 className={styles.titel}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.btnContainer}>
        <p>{id} post</p>

        <button className={styles.btn}>Delete</button>
      </div>
    </li>
  );
}
export default Post;
