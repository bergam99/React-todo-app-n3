// ES7 : rafce
import React, { useRef } from 'react'
import './style-component.css';

interface Props{
  todo:string;
  // copié collé ce qui était dans App.tsx/hover->const[.. ,settodo]
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  // i add and define here the function.
  // Since this function is not going to return anything, so i wrote  "() => void"
  // add here the type of event(e) e:React.FormEvent
  // we are supossed to define this here as well, because we are supposed to define it everywhere we are sending this variable.
  handleAdd:(e:React.FormEvent) => void;
}

// :Props : type de todo & setTodo. 
// handledAdd is received here by InputFeild.
const InputFeild = ({ todo, setTodo, handleAdd}:Props) => {
  // we are going to use UseRef, useRef is like when we use document.getElementById , we are hooking that particular components Html.
  // initial value going to be "null"
  // and provide "inputRef" in input tag.
  // <HTMLInputElement> is the type of input. so hover <input>tag and copy paste here.
  const inputRef = useRef<HTMLInputElement> (null);


// Also we can do this => const InputFeild:React.FC<Props> = ... => because its a functionnal component.
  return (
    // onSubmit => it should execute handleAdd when i click button "+"
    // useRef
    <form className="input" onSubmit={(e)=>handleAdd(e)}>
        <input 
        ref = {inputRef}
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