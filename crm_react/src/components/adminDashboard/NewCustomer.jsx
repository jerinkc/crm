import { useNavigate } from "react-router-dom"

import { CustomerDetailsForm } from "./CustomerDetailsForm"
import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext"

export function NewCustomer(){
  const navigate = useNavigate()
  const { setCurrentCustomer, customers, setCustomers } = useAdminDashboardContext()

  const handleSuccess = (newCustomer) => {
    setCustomers([...customers, newCustomer])
    setCurrentCustomer(newCustomer)

    navigate(`/admin/customers/${newCustomer.id}`)
  }

  return(
    <>
      <h1>Details</h1>
      <div>
        <CustomerDetailsForm handleSuccess={handleSuccess}/>
      </div>
    </>
  )
}
