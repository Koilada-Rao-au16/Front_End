

// Redux is a library which provides predictable state container
// It has a store, a reducer and actions
// Actions are performed which triggers reducer and reducer updates the store


//Whenwe use redux with react
// "React Component State" !== "Redux Store State"
// When we reload the page or navigate from 1 component to another the component state is lost.
// When we reload the page then only redux state is lost.

const redux = require('redux');

const initialState = {
  counter: 0,
  data: {},
  items: []
};

const createStore = redux.createStore;

const reducer = (state, action) => {
  console.log('[reducer state]=>',state);
  console.log('[reducer action]=>',action);
  state = state || initialState;
  if(action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter+1
    }
  }
  if(action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter-1
    }
  }
  if(action.type === 'ADD_DATA') {
    return {
      ...state,
      data: action.payload
    }
  }
  if(action.type === 'ADD_ITEM') {
    return {
      ...state,
      items: [ ...state.items, action.payload ]
    }
  }
  if(action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      items: state.items.filter(item => item.name !== action.payload)
    }
  }
  return state;
}

const store = createStore(reducer);

console.log(store.getState());
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({
  type: 'ADD_ITEM', 
  payload:{name:'T-Shirt', price: 500}
});

store.subscribe(()=>{
  console.log('Listening to music 1')
  const count = store.getState().counter;
  if(count === 1) {
    store.dispatch({type: 'INCREMENT'});
  }
});

store.dispatch({
  type: 'ADD_DATA',
  payload: {
    firstName: 'Hari',
    email: 'hari@yopmail.com'
  }
});

store.dispatch({
  type: 'ADD_ITEM', payload:{name:'Skirt', price: 1000}
});

store.subscribe(()=>{
  console.log('Listening to music 2')
});

console.log(store.getState());
store.dispatch({
  type: 'REMOVE_ITEM', payload: 'T-Shirt'
});


console.log(store);
