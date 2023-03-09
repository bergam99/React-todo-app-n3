import React, { useState } from 'react'
import './App.css'
import InputFeild from './components/inputFeild';
import { Todo } from './components/model';
import TodoList from './components/TodoList';


// ===========================================================================
// let name : string;
// name = "jiyun";
// ---------------------------------------------------------------------------
//  | : union (two property possible)
// let age : number | string;
// ---------------------------------------------------------------------------
// let isStudent : boolean;
// ---------------------------------------------------------------------------
// string[] = it can contains only array of string.
// number[] = contians only array of number.
// let hobbies : string[];
// ---------------------------------------------------------------------------
// tuple containes fixed amount of a value and the types that are defined during the declaration.
// let role : [number, string];
// role = [5, "string"];
// ---------------------------------------------------------------------------
// object needed type. there is 2 ways to set Object :
// 1) let person: Object;
// 2) :
// type Person = {
//   name : string;
//   age : number;
// }

// let person : Person = {
//   name : "nom",
//   age : 22,
// }
// ---------------------------------------------------------------------------
// array of person object :
// let lotsOfPeople : Person[]; 
// ===========================================================================
//                  How do we declare function type ? :

//void, string, number... We can give any also.
// let printName : (name : string) => void;
// but it's not recommanded to use "any" so, instead we can use "unknown"
// ===========================================================================
//                              never vs void

// never : dosent return anything.
// void : return undifined
// ===========================================================================
//                Difference between Type and interface : 

// 1) In the case of Type :

// like this, Type y contain all of X properties and all of Y properties as well.
//so, if i want to write an object of Y, it should contains properties of type X & Y.

// Type X = {
// 	a : string;
// 	b : number;
// };

// Typee Y = X & {
// 	c : string;
// 	d : number;
// };

// ---------------------------------------------------------------------------
// 2) In the case of interface :
// if we want to extends Person in the guy interface : we just need extends + interface name

// Interface Person  {
// 	name : string;
// 	age? :number;
// }

// interface Guy extends Person {
//   profession : string;
// }
// ===========================================================================
// # combined
// interface -> type : 
// type X  = Person & {}
// ---------------------------------------------------------------------------
// type -> interface :
// interface Person extends X {}
// ===========================================================================

// Si je mets curser sur App il me mets "const App: () => JSX.Element". ça veut dire que cette fonction retourne element jsx. Donc ce qui est dans return().
// this is a functionnal component (FC) : React.FC


const App : React.FC = () => {
// <string> : type of "todo". try hover and then you will see!
// utiliser union (|number) va marcher aussi
  const [todo, setTodo] = useState<string>("");

// ===========================================================================
// How i create an array of a type of an interface.
//this state will contain all of my todo items. so todo"s"
// this type going to be an Array. import Todo interface , and <Todo> is going to be an Array so <Todo[]>
const [todos, setTodos] = useState<Todo[]>([]);

// function 
// when we submit the form (InputFeild), it should add this inside of our handle add. so, now i take this function and pass this to our input field : <InputFeild />.
// Once it is added in InputFeild, i go to InputFeild and i'll add this function(handleAdd) in props.
const handleAdd = (e:React.FormEvent) => {
  // To fix refreshing each time when i click on button, i added e (event) and preventDefault. but "e" need type => i add e : React.FormEvent.
  // Once it's added, it should be setted in props (in InputFeild.)
  e.preventDefault();
  // if there is somthing inside of the todos?
  if(todo){
  // it should set our state. 
  // then weare only supposed to set todos.
  // ...todos : add 
  // id: ~~ we are gonna add an another todo. it is props id in InputFeild. so we are gonna generate 10 random id for that.
  // apres il faut typer id et todos.
    setTodos([...todos, { id : Date.now(), todo:todo, isDone:false }]);

  // vider inputFeild quand je submit.
  setTodo("");

  }
};


  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      {/* property should existe in <InputFeild /> */}
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} /> 

      { /* affichage todo items */}
      {/* {todos.map((t) => (
        <li>{t.todo}</li>
      ))}   */}
      <TodoList
      todos={todos} 
      setTodos = {setTodos} 
      /> 
    </div>
  );
};

export default App;
