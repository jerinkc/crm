import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import { Customer } from './Customer'
import adminCustomerApis from "../../apis/admin/customers"
import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext"

export function CustomerList(){
  const params = useParams()

  const { fetchCustomers } = adminCustomerApis
  const { setCurrentCustomer, customers, setCustomers } = useAdminDashboardContext()
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
        <>
          <div className="row">
            <div className="col-12">
              <nav className="nav justify-content-end">
                <Link to="/admin/customers/new"
                  className="btn btn-light">Add Customer</Link>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {
                customers.map((customer) => <Customer key={customer.id}
                  customer={customer}/>)
              }
            </div>
          </div>
        </>

      }
    </div>
  )
}
