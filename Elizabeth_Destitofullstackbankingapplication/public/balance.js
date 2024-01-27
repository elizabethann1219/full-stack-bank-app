import React, { createContext, useContext, useState } from 'react';

const BalanceContext = createContext();

export function useBalance() {
  return useContext(BalanceContext);
}

export function BalanceProvider({ children }) {
  const [balance, setBalance] = useState(0);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
}