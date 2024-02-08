import { createContext, useContext, useState } from 'react';

const AdminDashboardContext = createContext();

export const AdminDashboardContextProvider = ({ children }) => {
  const [currentCustomer, setCurrentCustomer] = useState(undefined)
  const [customers, setCustomers] = useState([])

  const adminDashboardContextStore = {
    currentCustomer,
    setCurrentCustomer,
    customers,
    setCustomers
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
