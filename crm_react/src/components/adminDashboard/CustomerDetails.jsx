import { useState, useEffect } from "react";

import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext";
import adminCustomerApis from "../../apis/admin/customers"

export function CustomerDetails(){

  const { currentCustomer, setCurrentCustomer } = useAdminDashboardContext()
  const { fetchCustomer } = adminCustomerApis

  useEffect(() => {
    fetchCustomer(currentCustomer.id)
      .then(response => {
        setCurrentCustomer(response.data)
      })
      .catch(error => console.error(error));
  }, [])

  return(
    <>
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
    </>

  )
}
