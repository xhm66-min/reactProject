import "./index.css";

export default function Item({ todo }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo.title}</span>
      </label>
      <button className="btn btn-danger" style={{ display: "none" }}>
        删除
      </button>
    </li>
  );
}
