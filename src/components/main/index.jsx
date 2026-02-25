import styles from "./styles.module.css";
import PostList from "../postList";

function Main() {
  return (
    <main className={styles.main}>
      <PostList />
    </main>
  );
}
export default Main;
