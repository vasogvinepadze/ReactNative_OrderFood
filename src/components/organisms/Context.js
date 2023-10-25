import React, { createContext, useState } from "react";

export const item = createContext();

export const Context = ({ children }) => {
  const [myBag, setMyBag] = useState([]);
  return <item.Provider value={{ myBag, setMyBag }}>{children}</item.Provider>;
};
