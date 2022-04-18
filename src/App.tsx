import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos([
      new Todo("m1", "Aprender React"),
      new Todo("m2", "Apender TypeSrcipt"),
    ]);
  }, []);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo("" + todos.length + 1, todoText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={() => removeTodoHandler}>
        Prueba de hijos...
      </Todos>
    </div>
  );
};

export default App;
