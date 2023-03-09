import React, { useEffect, useRef } from "react";
import { Todo } from "./model";
import { FaRegEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { MdDownloadDone } from "react-icons/md";
import "./style-component.css";
import TodoList from "./TodoList";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({
  index,
  todo,
  todos,
  setTodos,
}: Props) => {
  // for Edit, we are going to create two states.
  // Fiste one will keep the track if the EDIT MODE is On or not.
  // Second one will keep the value of the editor todo.

  // first one . it will be true or false, so boolean <boolean>.
  const [edit, setEdit] = useState<boolean>(false);

  // second one will keep the added todo text. <string> (its not empty in "". it will contains the input value by default. the input box appears with this todo value. )
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  // comment importer icons ? :
  // https://react-icons.github.io/react-icons/search?q=edit
  // aller ici et copie le nom de icon et créer la balise avec ce nom, puis import ce nom et icons/+2 premier alphabet de nom d'alphabet.

  // define function here / we receive ID and this type is number.
  const handleDone = (id: number) => {
    // now we are going to manipulate our setTodo the state with the help of this id.
    // we are going to map trought this array. Whichever Id matches with this ID we are going to make there is done property of that from false to true.
    //"(todo) => todo.id === id ? " : todo.id is equals to the id that we are sending.
    // "{ ...todo, isDone: !todo.isDone }" : we take all of the properties and change the isDone property.
    // " : todo" : return todo
    // we are gonna implement it.
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  //  HANDLE DELETE

  const handleDelete = (id: number) => {
    // if todo.id is not equals id only then return./ instead of id deleted, all of resst will be returned.
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    // preventing the default behavior so that the screen dosen't get refreshed.
    e.preventDefault();
    // and we set todo.
    setTodos(
      // if todo.id matches the Id that is sent by them (on submit), it willtake all of todos.and .
      todos.map((todo) =>
        // when is done we just update. so toDo will ve added to.
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  // if we click on the Edit button, the focus doesn't go inside of the input component. to fix it we can use "useRef" and useEffect hook. :
  // # HTMLInputElement : type de input

  //   whenever the edit changes, its going to file off this.
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    // making the single todo as a draggable todo.
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        //   {/* submit the change = submit
        // // handleEdit takes event and todo.id */}
        <form
          className="todos__single"
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}

        >
          {/* condition of EDIT */}
          {edit ? (
            // if i put editTodo that i defined in useState, it will appear the todo value, Beacause it contains (todo.todo).
            // second, we gonna add Onchange
            <input
              ref={inputRef}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
            />
          ) : //  HANDLE DONE
          // if its done, then go to strike it off. <s></s>
          todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            // otherwise, if its not done, then its going to render the normal one. <span></span>
            <span className="todos__single--text">{todo.todo}</span>
          )}

          {/* créer single todo component <span className="todos__single--text">
          {todo.todo} */}

          {/* we are gonna check if EDIT MODE is on or not. So, if EDIT MODE is not on, and todo is not done, we are going to edit it. */}
          {/* once its font, we add condition */}

          <div className="icon-box">
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <FaRegEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <TiDeleteOutline />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDownloadDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
