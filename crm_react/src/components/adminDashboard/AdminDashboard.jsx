import { Outlet } from "react-router-dom"

import { CustomerList } from "./CustomerList"
import { AdminDashboardContextProvider } from "../../contexts/AdminDashboardContext"

export function AdminDashboard(){
  return(
    <AdminDashboardContextProvider>
      <div className="h-100 w-100">
        <div className="row h-100">
          <div className="col-12 col-md-3 bg-primary p-3 text-light">
            <CustomerList/>
          </div>
          <div className="col-12 col-md-9 overflow-hidden p-3">
            <Outlet/>
          </div>
        </div>
      </div>
    </AdminDashboardContextProvider>
  )
}
