import React, { useEffect, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: any }> = (props) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
