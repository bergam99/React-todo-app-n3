// npm i react-beautiful-dnd
import React from "react";
import "./style-component.css";
import { Todo } from "./model";
import SingleTodo from "./singleTodo";
import { Droppable } from "react-beautiful-dnd";

// type of todos
interface Props {
  // todos was an array of type todo
  todos: Todo[];
  // je hover sur setTodos dans app.tsx
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

  CompletedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

// bring todos. and setTodos also. because we need to delete and modify items.and lets define the type of these.
// 1) error
// const TodoList : React.FC = ({todos, setTodos}:Props) => {
//   return (
//     <div className="todos"></div>
//   )
// };

// 2) succes!
// <div className="todos">
//   {todos.map((todo) => (
//     // seperate component for single todo

//     // <li>{todo.todo}</li>
//     <SingleTodo
//       // this {todo} is map(todo) we are sended
//       todo={todo}
//       key={todo.id}
//       //  sand all of todos (delete, modify..)
//       todos={todos}
//       setTodos={setTodos}
//     />
//   ))}
// </div>

// =========== DRAG AND DROP ==========
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      {/* droppable area */}
      {/* droppableId is juste for identify the droppable zone uniquely. So we are gonna provide TodoList */}
      {/* Active tasks */}
      <Droppable droppableId="TodosList">
        {/* we need to pass a callback, and then we need to shift it inside of there. */}
        {/* 1. provided. provided is going to parent dev -ref */}
        {/* beautiful DND can control this as a drop zone. */}

        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Ma tasks🖋️</span>
            {/* rander all of the todos */}
            {/* pour dragger, on a besoin de index */}
            {todos?.map((todo, index) => (
              // single todo component here

              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {/* save changed drag and drop */}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Completed!🥳</span>
            {CompletedTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={CompletedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {/* save changed drag and drop */}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
