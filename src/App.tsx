import React, { useState } from 'react'
import './App.css'
import InputFeild from './components/input-component/inputFeild';


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
  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      {/* property should existe in <InputFeild /> */}
      <InputFeild todo={todo} setTodo={setTodo} />    
    </div>
  );
};

export default App
