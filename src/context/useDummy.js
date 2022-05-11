import { createContext, useContext, useState } from "react";
import dummydata from "../data/dummy";

export const dummyContext = createContext();

export const DummyDataProvider = ({ children }) => {
  const [dummyData, setDummyData] = useState(
    localStorage.getItem("getDummy")
      ? JSON.parse(localStorage.getItem("getDummy"))
      : dummydata
  );

  if (!localStorage.getItem("getDummy")) {
    localStorage.setItem("getDummy", JSON.stringify(dummydata));
  }

  return (
    <dummyContext.Provider value={[dummyData, setDummyData]}>
      {children}
    </dummyContext.Provider>
  );
};

export const useDummyData = () => useContext(dummyContext);
