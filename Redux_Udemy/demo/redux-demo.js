// const redux = require("redux");

// const counterReducer = (state = { counter: 0 }, action) => {
//   return {
//     counter: state.counter + 1,
//   };
// };
// const store = redux.createStore(counterReducer);

// console.log(store.getState());

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };
// store.subscribe(counterSubscriber);

// const redux = require("redux");

// const counterReducer = (state, action) => {
//   return {
//     counter: state.counter + 1,
//   };
// };
// const store = redux.createStore(counterReducer);
// console.log(store.getState());

// const createSubscriber = () => {
//   const currentState = store.getState();
//   console.log(currentState);
// };

// store.subscribe(createSubscriber);

// const redux = require("redux");

// const counterReducer = (state = {counter:0} ,action) => {
//     return {
//         counter : state.counter  + 1 - 2
//     }
// }

// const store = redux.createStore(counterReducer);
// console.log(store.getState());

// const createSubscriber = () =>{
//     const latestState = store.getState();
//     console.log(latestState)
// }

// store.subscribe(createSubscriber)

const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 500,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 400,
    };
  }

  if (action.type === "multiplication") {
    return {
      counter: state.counter * 5,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);
console.log(store.getState());

const createSubscriber = () => {
  const updatedState = store.getState();
  console.log(updatedState);
};

store.subscribe(createSubscriber);

store.dispatch({ type: "increment" });

store.dispatch({ type: "decrement" });

store.dispatch({ type: "multiplicatio" });
