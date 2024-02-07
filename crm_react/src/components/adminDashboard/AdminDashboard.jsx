import { useState, useEffect } from "react"

import { CustomerList } from "./CustomerList"
import { CustomerInteractionPanel } from "./CustomerInteractionPanel"
import adminCustomerApis from "../../apis/admin/customers"

export function AdminDashboard(){
  const [customers, setCustomers] = useState([])
  const [currentCustomer, setCurrentCustomer] = useState({})

  const { fetchCustomers } = adminCustomerApis;

  useEffect(() => {
    fetchCustomers()
      .then(response => setCustomers(response.data))
      .catch(error => console.error(error));
  }, [])

  const handleCustomerSelect = (customer) => {
    setCurrentCustomer(customer)
  }

  return(
    <div className="h-100 w-100">
      <div className="row h-100">
        <div className="col-12 col-md-3 bg-primary p-3 text-light">
          <CustomerList customers={customers} handleCustomerSelect={handleCustomerSelect}/>
        </div>
        <div className="col-12 col-md-9 overflow-hidden p-3">
          <CustomerInteractionPanel customer={ currentCustomer }/>
        </div>
      </div>
    </div>
  )
}
