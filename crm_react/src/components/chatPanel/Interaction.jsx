

export function Interaction({ currentUser }){
  return(
    currentUser
      ? <div className="d-flex align-items-end flex-column m-3">
          <div className="bg-primary mw-75 w-75 p-2 rounded">
            <div className="sender-name text-warning fw-bold">
              Current User
            </div>
            <div className="text-light">
              This is a message box
            </div>
          </div>
        </div>
      : <div className="bg-success mw-75 w-75 p-2 rounded m-3">
          <div className="sender-name text-info fw-bold">
            Customer
          </div>
          <div className="text-light">
            This is a message box
          </div>
        </div>
  )
}
