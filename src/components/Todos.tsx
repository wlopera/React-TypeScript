import React from "react";
import Todo from "../models/todo";

import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]; children: any }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
      <p>{props.children}</p>
    </div>
  );
};

export default Todos;
