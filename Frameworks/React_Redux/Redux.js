// Create a Redux Store
// --------------------
const reducer = (state = 5) => {
    return state;
}
// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);



// Get State from the Redux Store
// ------------------------------
const store = Redux.createStore(
    (state = 5) => state
);
// Change code below this line
const currentState = store.getState();
// console.log(currentState); // gives 5


// Define a Redux Action
// ---------------------
// Define an action here:
let action = {
    type: 'LOGIN'
}


// Define an Action Creator
// ------------------------
const action = {
    type: 'LOGIN'
}
// Define an action creator here:
const actionCreator = () => {
    return action
}


// Dispatch an Action Event
// ------------------------
const store = Redux.createStore(
    (state = {login: false}) => state
);
const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};
// Dispatch the action here:
store.dispatch(loginAction());


// Handle an Action in the Store
// -----------------------------
const defaultState = {
    login: false
};
  
const reducer = (state = defaultState, action) => {
    // Change code below this line
    if (action.type === "LOGIN") {
        return {
            login: true
        };
    } else {
        return state;
    }
    // Change code above this line
};
  
const store = Redux.createStore(reducer);
  
const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};


// Use a Switch Statement to Handle Multiple Actions
// -------------------------------------------------
