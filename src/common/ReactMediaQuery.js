import React, {useState, useContext} from "react";

/**
 * this is not my code
 * credit to: Ben Honeywill
 * https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
 */

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width } = useContext(viewportContext);
  return { width };
}

export {ViewportProvider, useViewport }