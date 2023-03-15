import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [cartId, setCartId] = useState(null);
  let [items, setItems] = useState(0);


  return (
    <AppContext.Provider value={{ cartId, setCartId, items, setItems}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
