import React, {component} from 'react';
import {createStore} from 'redux';

function Redux(){

// action
// function action()  {
//     return {
//         type: "ATTACK",
//         payload: "WAR"
//     }
// }

// 2
const reducer=  function(state, action) {
    if(action.type === "ATTACK"){
        return action.payload
    }if(action.type === "No-ATTACK"){
        return action.payload
    }
 return state;
}

// 1
const store = createStore(reducer, "Peace");
// console.log("InitialState", store.getState())
store.subscribe(() => {
    console.log("CurrentState", store.getState());
})

store.dispatch( { type: "ATTACK",    payload: "WAR"})
store.dispatch({ type: "No-ATTACK",    payload: "PEACE"})

return (
    <div>hii</div>
);
}

export default Redux;
