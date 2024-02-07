export function AdminDashboard(){
  customers = [
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

  return(
    <div class="h-100 w-100">
      <div class="row h-100">
        <div class="col-12 col-md-3 bg-primary p-3 text-light">
          <p>Customers section</p>
        </div>
        <div class="col-12 col-md-9 overflow-hidden p-3">
          <div class="row h-100">
            <div class="col">
              <p>Page Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
