import { Link, useLocation } from "react-router-dom"

import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext";

export function CustomerInteractionPanel(){
  const location = useLocation();

  const { currentCustomer } = useAdminDashboardContext()
  const currentPath = location.pathname

  return(
    <>
      {
        currentCustomer ?
          <>
            <div className="row border-bottom border-primary border-2">
              <div className="col-12 col-md-12">
                <div className="row">
                  <div className="col-md-8">
                    <Link to={ `${currentPath}/about` }>
                      <div className="card-body">
                          <h5 className="card-title">{ currentCustomer.full_name }</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{ currentCustomer.email }</h6>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <ul className="nav justify-content-end">
                      <li className="nav-item">
                        <Link to={ `${currentPath}/edit` } className="nav-link">
                          Edit
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={ `${currentPath}/delete` } className="nav-link">
                          Delete
                        </Link>
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
