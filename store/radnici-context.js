import { createContext, useReducer } from 'react';

export const RadniciContext = createContext({
  radnici: [],
  //addExpense: ({ description, amount, date }) => {},
  addRadnik: ({ ime, prezime, username, sifra }) => {},
  setRadnici: (radnici) => {},
  deleteRadnik: (id) => {},
  //updateExpense: (id, { description, amount, date }) => {},
  updateRadnik: (id, { ime, prezime, username, sifra }) => {},
});

function radniciReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'UPDATE':
      const updatableRadnikIndex = state.findIndex(
        (radnik) => radnik.id === action.payload.id
      );
      const updatableRadnik = state[updatableRadnikIndex];
      const updatedItem = { ...updatableRadnik, ...action.payload.data };
      const updatedRadnici = [...state];
      updatedRadnici[updatableRadnikIndex] = updatedItem;
      return updatedRadnici;
    case 'DELETE':
      return state.filter((radnik) => radnik.id !== action.payload);
    default:
      return state;
  }
}

function RadniciContextProvider({ children }) {
  const [radniciState, dispatch] = useReducer(radniciReducer, []);

  function addRadnik(radnikData) {
    dispatch({ type: 'ADD', payload: radnikData });
  }

  function setRadnici(radnici) {
    dispatch({ type: 'SET', payload: radnici });
  }

  function deleteRadnik(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateRadnik(id, radnikData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: radnikData } });
  }

  const value = {
    radnici: radniciState,
    setRadnici: setRadnici,
    addRadnik: addRadnik,
    deleteRadnik: deleteRadnik,
    updateRadnik: updateRadnik,
  };

  return (
    <RadniciContext.Provider value={value}>
      {children}
    </RadniciContext.Provider>
  );
}

export default RadniciContextProvider;
