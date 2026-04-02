import Item from '../Item/index.jsx'

export default function List({ todos }) {
  return (
    <ul className="todo-main">
      {todos.map(todo => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
