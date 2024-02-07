import { NavLink } from "react-router-dom"

import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext"
import styles from "./Customer.styles.css"

export function Customer({ customer }){
  const { setCurrentCustomer } = useAdminDashboardContext()

  return(
    <NavLink
      to={`/admin/customers/${customer.id}`}
      onClick={() => setCurrentCustomer(customer)}
      className={({ isActive }) => `text-decoration-none ${isActive ? 'customer-active' : ''}`}>
      <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title">{ customer.full_name }</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ customer.email }</h6>
        </div>
      </div>
    </NavLink>
  )
}
