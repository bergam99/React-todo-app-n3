// ES7 : rafce
import React from 'react'
import './InputFeild.css';

interface Props{
  todo:string;
  // copié collé ce qui était dans App.tsx/hover->const[.. ,settodo]
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

// :Props : type de todo & setTodo.
const InputFeild = ({ todo, setTodo }:Props) => {
// Also we can do this => const InputFeild:React.FC<Props> = ... => because its a functionnal component.
  return (
    <form className="input">
        <input 
        type="input" 
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)} 
        placeholder= "Enter a task" 
        className="input__box"
        />
        <button className='input__submit' type="submit">+</button>
    </form>
      )  
}

export default InputFeild