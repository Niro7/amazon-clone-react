import React, { createContext, useContext, useReducer } from "react";
// Prepares the DataLayer
export const StateContext = createContext();

// Wrap our app and provide the DataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// PUll information from the data Layer
export const useStateValue = () => useContext(StateContext);
