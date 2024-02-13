import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext";
import { useTokenizedApiServiceContext } from "../../contexts/TokenizedApiServiceContextProvider";

export function CustomerDetails(){
  const params = useParams()

  const { currentCustomer, setCurrentCustomer } = useAdminDashboardContext()
  const customerId = currentCustomer?.id || parseInt(params.customerId)
  const { get } = useTokenizedApiServiceContext()

  useEffect(() => {
    get(`/admin/customers/${customerId}`)
      .then(response => {
        setCurrentCustomer(response.data)
      })
      .catch(error => console.error(error));
  }, [])

  return(
    currentCustomer
    ?  <div>
        <h1>Details</h1>
        <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Data Stored</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Email</th>
              <td>{ currentCustomer.email }</td>
            </tr>
            <tr>
              <th scope="row">Fullname</th>
              <td>{ currentCustomer.full_name }</td>
            </tr>
            <tr>
              <th scope="row">Phone</th>
              <td>{ currentCustomer.contact ? currentCustomer.contact.phone : 'Fetching...' }</td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td>{ currentCustomer.contact ? currentCustomer.contact.address : 'Fetching...' }</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    : null
  )
}
