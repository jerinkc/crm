import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Customer } from './Customer'
import adminCustomerApis from "../../apis/admin/customers"
import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext"

export function CustomerList(){
  const [customers, setCustomers] = useState([])
  const params = useParams()

  const { fetchCustomers } = adminCustomerApis
  const { setCurrentCustomer } = useAdminDashboardContext()
  const customerId = parseInt(params.customerId)

  useEffect(() => {
    fetchCustomers()
      .then(response => {
        const responseData = response.data
        const currentCustomer = responseData.find((customer) => customer.id === customerId)
        setCustomers(responseData)
        setCurrentCustomer(currentCustomer)
      })
      .catch(error => console.error(error));
  }, [])

  return(
    <div>
      {
        customers.map((customer) => <Customer key={customer.id}
          customer={customer}/>)
      }
    </div>
  )
}
