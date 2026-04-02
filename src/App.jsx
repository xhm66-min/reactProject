import { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
function App() {
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        title: '学习react',
        completed: false,
      },
      {
        id: 2,
        title: '学习react',
        completed: false,
      },
    ],
  })
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List todos={state.todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
