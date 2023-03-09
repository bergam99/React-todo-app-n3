import React from "react";
import "./style-component.css";
import { Todo } from "./model";
import SingleTodo from "./singleTodo";

// type of todos
interface Props {
  // todos was an array of type todo
  todos: Todo[];
  // je hover sur setTodos dans app.tsx
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

// bring todos. and setTodos also. because we need to delete and modify items.and lets define the type of these.
// 1) error
// const TodoList : React.FC = ({todos, setTodos}:Props) => {
//   return (
//     <div className="todos"></div>
//   )
// };

// 2) succes!
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        // seperate component for single todo

        // <li>{todo.todo}</li>
        <SingleTodo
          // this {todo} is map(todo) we are sended
          todo={todo}
          key={todo.id}
          //  sand all of todos (delete, modify..)
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
