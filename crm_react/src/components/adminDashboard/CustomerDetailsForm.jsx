import { useState } from "react"

import adminCustomerApis from "../../apis/admin/customers"

export function CustomerDetailsForm({ handleSuccess, customer }){
  const initialValues = {
    email: customer ? customer.email : '',
    full_name: customer ? customer.full_name : '',
    phone: customer?.contact ? customer.contact.phone : '',
    address: customer?.contact ? customer.contact.address : ''
  }
  const { createCustomer, updateCustomer } = adminCustomerApis

  const [formData, setFormData] = useState(initialValues)
  const [errors, setErrors] = useState(null)

  const handleChange = (event) => {
    const updatedData = {...formData, [event.target.name]: event.target.value}
    setFormData(updatedData)
  }

  const transformedData = () => {
    return {
      customer: {
        email: formData.email,
        full_name: formData.full_name,
        contact_attributes: {
          phone: formData.phone,
          address: formData.address
        }
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const requestData = transformedData()

    customer
      ? updateCustomer(customer.id, requestData)
          .then(response => {
            if(response.errors?.length >= 1)
              throw new Error(response.errors)
            else{
              const updatedCustomer = response.data
              handleSuccess(updatedCustomer)
            }
          })
        .catch(err => setErrors(err.message))
      : createCustomer(requestData)
          .then(response => {
            if(response.errors?.length >= 1)
              throw new Error(response.errors)
            else{
              const newCustomer = response.data
              handleSuccess(newCustomer)
            }
          })
          .catch(err => setErrors(err.message))
  }

  return(
    <>
      {
        errors ? <div className="alert alert-danger" role="alert">{ errors }</div>
        : null
      }
      <form onSubmit={handleSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Email<span className="text-danger">*</span></th>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-100"
                  value={formData.email}
                  onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th scope="row">Fullname<span className="text-danger">*</span></th>
              <td>
                <input type="text"
                  name="full_name"
                  className="w-100"
                  id="fullName"
                  value={formData.full_name}
                  onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <th scope="row">Phone<span className="text-danger">*</span></th>
              <td>
                <input type="text"
                  id="phone"
                  name="phone"
                  className="w-100"
                  value={formData.phone}
                  onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  className="w-100"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="submit" className="btn btn-primary"></input>
      </form>
    </>
  )
}
