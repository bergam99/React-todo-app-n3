import React from 'react'
import { Todo } from './model'

type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>

}


const SingleTodo : React.FC<Props> = ({todo, todos, setTodos}:Props) => {


  return (
    <form className='todos__single'>
        {/* créer single todo component */}
        <span className="todos__single--text">
            {todo.todo}
        </span>

    </form>
  )
}

export default SingleTodo;