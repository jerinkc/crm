import { Outlet } from "react-router-dom";

import { AdminDashboardContextProvider } from "../../contexts/AdminDashboardContext"
import { AuthContextProvider } from "../../contexts/AuthContextProvider"
import { TokenizedApiServiceContextProvider } from "../../contexts/TokenizedApiServiceContextProvider"

export function Admin(){
  return(
    <AuthContextProvider>
      <TokenizedApiServiceContextProvider>
        <AdminDashboardContextProvider>
          <Outlet/>
        </AdminDashboardContextProvider>
      </TokenizedApiServiceContextProvider>
    </AuthContextProvider>
  )
}
