import { Outlet } from "react-router-dom";
import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext";

export function CustomerActionPanel(){
  const { currentCustomer } = useAdminDashboardContext()

  return(
    <div className="h-100">
      { currentCustomer ? <Outlet/> : null }
    </div>
  )
}
