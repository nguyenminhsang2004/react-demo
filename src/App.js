import "./App.css";
import RandomImage from "./components/RandomImage";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "ReactJS" },
    { id: 2, title: "ReactHooks" },
    { id: 3, title: "NextJS" },
  ]);
  const handleTodoClick = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (formValues) => {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };
  return (
    <div className="App">
      <RandomImage />
    </div>
  );
}

export default App;
