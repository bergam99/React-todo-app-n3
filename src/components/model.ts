export interface Todo {
    id : number;
    todo:string;
    isDone : boolean;
}


// // reducer hook

// // define actions
// type Actions = 
//  | {type : 'add'; payload ; string}
//  | {type : 'remove'; payload ; number}
//  | {type : 'done'; payload ; number};

// // state is going to be an array of todo.so we copy interface : Todo[]
// // action going to have 3 things :add, remove, done

// const TodoReducer = (state:Todo[], action:Actions ) => {

// }
// import React, { useReducer } from 'react';

// const ReducerExemple = () => {
// // [] = initial value
// // provide TodoReducer, and return state, dispatch.
//     const [state, dispatch] = useReducer(TodoReducer, []);
//   return (
//     <div />;
//   )
// }

// export default model