import React, { createContext, useContext, useReducer } from "react";

// preparation of the data layer
export const StateContext = createContext();

// wrap the app and providing the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pulling the data layer
export const useStateValue = () => useContext(StateContext);
