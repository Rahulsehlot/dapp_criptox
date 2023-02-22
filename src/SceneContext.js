import { createContext, useState } from "react";

export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [loggedIn, setloggedIn] = useState("");

  return (
    <SceneContext.Provider value={{ loggedIn, setloggedIn }}>
      {children}
    </SceneContext.Provider>
  );
}
