import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext";

export function CustomerInteractionPanel(){
  const { currentCustomer } = useAdminDashboardContext()

  return(
    <>
      {
        currentCustomer ?
          <>
            <div className="row border-bottom border-primary border-2">
              <div className="col-12 col-md-12">
                <div className="row">
                  <div className="col-md-6">
                  <div className="card-body">
                      <h5 className="card-title">{ currentCustomer.full_name }</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{ currentCustomer.email }</h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <ul className="nav justify-content-end">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row h-75 relative mt-3">
              <div className="col-12 col-md-12 h-100">
                Inteactions
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12">
                Conversation text box
              </div>
            </div>
          </>
        : null
      }
    </>
  )
}
