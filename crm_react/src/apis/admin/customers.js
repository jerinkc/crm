import { api } from "../api"

const path = '/admin/customers'


const fetchCustomers = () =>  api.get(path);

const fetchCustomer = (customerId) =>  api.get(`${path}/${customerId}`);


const adminCustomerApis = {
  fetchCustomers,
  fetchCustomer
}

export default adminCustomerApis

