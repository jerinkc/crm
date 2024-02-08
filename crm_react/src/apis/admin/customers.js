import { api } from "../api"

const path = '/admin/customers'


const fetchCustomers = () =>  api.get(path);

const fetchCustomer = (customerId) =>  api.get(`${path}/${customerId}`);

const createCustomer = (customer) => api.post(path, customer)

const adminCustomerApis = {
  fetchCustomers,
  fetchCustomer,
  createCustomer
}

export default adminCustomerApis

