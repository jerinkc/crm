import { useState } from "react"

import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext";
import adminCustomerApis from "../../apis/admin/customers"
import { CustomerDetails } from "./CustomerDetails";

export function ConfirmCustomerDelete(){
  const [loading, setLoading] = useState(false)

  const { deleteCustomer } = adminCustomerApis
  const { customers, setCustomers, currentCustomer, setCurrentCustomer } = useAdminDashboardContext()

  const handleDelete = () => {
    setLoading(true)
    deleteCustomer(currentCustomer.id)
      .then((response) => {
        if(response.success){
          const updatedCustomers = customers.filter((customer) => customer.id !== currentCustomer.id);
          setCustomers(updatedCustomers);
          setCurrentCustomer(null)
        }
        setLoading(false)
      })
  }

  if(!currentCustomer)
    return(<div className="alert alert-danger" role="alert">Customer Deleted!</div>)


  return(
    <>
      <CustomerDetails/>
      <div className="card">
        <div className="card-body">
          Please confirm to delete<br/><br/>
          <button type="button"
            className={ `btn btn-danger ${loading ? 'disabled' : ''}` }
            onClick={ () => handleDelete() }>Confirm Delete</button>
        </div>
      </div>
    </>
  )
}
