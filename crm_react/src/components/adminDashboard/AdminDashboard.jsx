import { CustomerList } from "./CustomerList"
import { useState } from "react"

export function AdminDashboard(){
  const customers = [
      {
          id: 2,
          email: "customer1@example.com",
          full_name: "Customer 1"
      },
      {
          id: 3,
          email: "customer3@example.com",
          full_name: "Customer 1"
      },
      {
          id: 4,
          email: "customer4@example.com",
          full_name: "Customer 1"
      }
  ]
  const [currentCustomer, setCurrentCustomer] = useState({
    id: 2,
    email: "customer1@example.com",
    full_name: "Customer 1"
  })
  const handleCustomerSelect = (customer) => {
    console.log(customer)
    setCurrentCustomer(customer)
  }

  return(
    <div className="h-100 w-100">
      <div className="row h-100">
        <div className="col-12 col-md-3 bg-primary p-3 text-light">
          <CustomerList customers={customers} handleCustomerSelect={handleCustomerSelect}/>
        </div>
        <div className="col-12 col-md-9 overflow-hidden p-3">
          <div className="row h-100">
            <div className="col">
              <p>Page Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
