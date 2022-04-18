import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <div>
      <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            //onRemoveTodo={todosCtx.bind(null, item.id)}
            onRemoveTodo={() => todosCtx.removeTodo(item.id)}
          />
        ))}
      </ul>
      {/* <p>{props.children}</p> */}
    </div>
  );
};

export default Todos;
