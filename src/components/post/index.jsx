import userLogo from "/src/assets/userlogo.svg";

function Post({ title, text, id }) {
  return (
    <li>
      <div>
        <img src={userLogo}></img>
        <p>User logo</p>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div>{id}</div>
      <button>Delete</button>
    </li>
  );
}
export default Post;
