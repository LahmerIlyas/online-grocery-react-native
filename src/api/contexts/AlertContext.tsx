import React, { useMemo } from 'react';

export const AlertContext = React.createContext({
  alert: null,
  clearAlert: () => {},
});

interface AlertProviderProps {
  children: JSX.Element;
}
export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alert, setAlert] = React.useState(null);

  const clearAlert = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider
      value={{
        alert,
        clearAlert,
      }}>
      {useMemo(() => children, [])}
    </AlertContext.Provider>
  );
};
