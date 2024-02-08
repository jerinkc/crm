import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext";
import adminCustomerApis from "../../apis/admin/customers"
import { CustomerDetails } from "./CustomerDetails";

export function ConfirmCustomerDelete(){
  const [loading, setLoading ] = useState(false)
  const [error, setError] = useState('')

  const { deleteCustomer } = adminCustomerApis
  const { customers, setCustomers, currentCustomer, setCurrentCustomer } = useAdminDashboardContext()

  const handleDelete = () => {
    deleteCustomer(currentCustomer.id)
      .then((response) => {
        if(response.success){
          const updatedCustomers = customers.filter((customer) => customer.id !== currentCustomer.id);
          setCustomers(updatedCustomers);
          setCurrentCustomer(null)
        }
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
            className="btn btn-danger"
            onClick={ () => handleDelete() }>Confirm Delete</button>
        </div>
      </div>
    </>
  )
}
