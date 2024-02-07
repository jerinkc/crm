import { api } from "../api"

const path = '/admin/customers'


const fetchCustomers = () =>  api.get(path);


const adminCustomerApis = {
  fetchCustomers
}

export default adminCustomerApis

