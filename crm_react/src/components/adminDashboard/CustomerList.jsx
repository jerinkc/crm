import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import { Customer } from './Customer'
import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext"
import { useTokenizedApiServiceContext } from "../../contexts/TokenizedApiServiceContextProvider"

export function CustomerList(){
  const params = useParams()

  const { get } = useTokenizedApiServiceContext()
  const { setCurrentCustomer, customers, setCustomers } = useAdminDashboardContext()
  const customerId = parseInt(params.customerId)

  useEffect(() => {
    get('/admin/customers')
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
