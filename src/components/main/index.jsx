import styles from "./styles.module.css";
import PostList from "../postList";
import PostForm from "../postForm";

function Main() {
  return (
    <main className={styles.main}>
      <PostList />
      <PostForm />
    </main>
  );
}
export default Main;
