import { createContext, useContext, useState } from 'react';

const AdminDashboardContext = createContext();

export const AdminDashboardContextProvider = ({ children }) => {
  const [currentCustomer, setCurrentCustomer] = useState(undefined)

  const adminDashboardContextStore = {
    currentCustomer,
    setCurrentCustomer,
  }

  return (
    <AdminDashboardContext.Provider value={adminDashboardContextStore}>
      {children}
    </AdminDashboardContext.Provider>
  );
};

export function useAdminDashboardContext(){
  return useContext(AdminDashboardContext)
}
