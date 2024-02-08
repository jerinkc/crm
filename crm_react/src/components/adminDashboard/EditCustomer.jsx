import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { CustomerDetailsForm } from "./CustomerDetailsForm"
import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext"
import adminCustomerApis from "../../apis/admin/customers"


export function EditCustomer(){
  const navigate = useNavigate()
  const params = useParams()
  const [loading, setLoading] = useState(false)

  const { fetchCustomer } = adminCustomerApis
  const { setCurrentCustomer, customers, setCustomers, currentCustomer } = useAdminDashboardContext()

  useEffect(() => {
    const customerId = params.customerId
    const hasFullCustomerData = !!!currentCustomer?.contact

    if( !hasFullCustomerData ){
      setLoading(true)
      fetchCustomer(customerId)
        .then(response => {
          setCurrentCustomer(response.data)
          setLoading(false)
        })
        .catch(error => console.error(error));
    }
  }, [])

  const handleSuccess = (updatedCustomer) => {
    const customerIndex = customers.findIndex((customer) => customer.id === updatedCustomer.id);
    const updatedCustomers = [...customers];
    updatedCustomers[customerIndex] = updatedCustomer;

    setCustomers(updatedCustomers)
    setCurrentCustomer(updatedCustomer)

    navigate(`/admin/customers/${updatedCustomer.id}`)
  }

  return(
    <>
      <h1>Details</h1>
      <div>
        {
          loading
            ? <p>Loading information...</p>
            : <CustomerDetailsForm handleSuccess={handleSuccess} customer={currentCustomer}/>
        }
      </div>
    </>
  )
}
