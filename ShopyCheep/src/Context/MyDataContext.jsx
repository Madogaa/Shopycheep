import { createContext, useState } from 'react';

const MyDataContext = createContext();

export const MyDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [valor, setValor] = useState(5);

  // Puedes utilizar una función para actualizar los datos en el contexto si lo necesitas
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const updateValor = (newValor) => {
    setValor(newValor);
  };

  return (
    <MyDataContext.Provider value={{ products, updateProducts, valor, updateValor }}>
      {children}
    </MyDataContext.Provider>
  );
};

export default MyDataContext;