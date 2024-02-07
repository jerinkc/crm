export function Customer({ customer, handleCustomerSelect }){

  return(
    <div className="card m-3"
      style={{ cursor: 'pointer' }}
      onClick={ () => handleCustomerSelect(customer) }>
      <div className="card-body">
        <h5 className="card-title">{ customer.full_name }</h5>
        <h6 className="card-subtitle mb-2 text-muted">{ customer.email }</h6>
      </div>
    </div>
  )
}
