import { Customer } from './Customer'

export function CustomerList({ customers, handleCustomerSelect }){
  return(
    <div>
      { customers.map((customer) => <Customer key={customer.id}
          customer={customer}
          handleCustomerSelect={handleCustomerSelect}/>) }
    </div>
  )
}
