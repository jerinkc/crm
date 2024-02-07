
export function CustomerInteractionPanel({ customer }){
  return(
    <>
      <div className="h-100">
        <div class="row border-bottom border-primary border-2">
          <div class="col-12 col-md-12">
            <div class="row">
              <div class="col-md-6">
              <div className="card-body">
                  <h5 className="card-title">{ customer.full_name }</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{ customer.email }</h6>
                </div>
              </div>
              <div class="col-md-6">
                <ul class="nav justify-content-end">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row h-75 relative mt-3">
          <div class="col-12 col-md-12 h-100">
            Inteactions
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-12">
            Conversation text box
          </div>
        </div>
      </div>
    </>
  )
}
