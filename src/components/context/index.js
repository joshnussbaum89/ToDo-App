// This file creates the context for the whole application
import React from "react";

const TodoContext = React.createContext();

export const Provider = TodoContext.Provider;
export const Consumer = TodoContext.Consumer;
