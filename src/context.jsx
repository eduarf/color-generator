import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Values from "values.js";
import { toast } from "react-toastify";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [colorList, setColorList] = useState([]);
  AppProvider.propTypes = {
    children: PropTypes.node,
  };

  const colorGenerator = (color) => {
    const colors = new Values(color ? color : "#e91325").all(10);
    setColorList([...colors]);
    if (color) toast.success("generated");
  };

  useEffect(() => {
    colorGenerator();
  }, []);

  return (
    <AppContext.Provider value={{ colorGenerator, colorList }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(AppContext);
