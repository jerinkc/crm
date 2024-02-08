import { Outlet } from "react-router-dom";
import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext";

export function CustomerActionPanel(){
  return(
    <div className="h-100">
      <Outlet/>
    </div>
  )
}
