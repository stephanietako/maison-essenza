"use client";

import { createContext, useContext } from "react";

const defaultTheme = {
  display: {
    on: "flex",
    off: "none",
  },
};

const AnimationContext = createContext(defaultTheme);

export const AnimationProvider = ({ children }) => {
  return (
    <AnimationContext.Provider value={defaultTheme}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useTheme = () => useContext(AnimationContext);
