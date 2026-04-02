import "./index.css";

export default function Footer() {
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" />
      </label>
      <span>
        <span>已完成0</span> / 全部3
      </span>
      <button className="btn btn-danger">删除已完成</button>
    </div>
  );
}
