import { useState, useEffect } from "react";

import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext";
import adminCustomerApis from "../../apis/admin/customers"
import { CustomerDetails } from "./CustomerDetails";

export function ConfirmCustomerDelete(){

  return(
    <>
      <CustomerDetails/>
      <div className="card">
        <div className="card-body">
          Please confirm to delete<br/><br/>
          <button type="button" className="btn btn-danger disabled">Danger</button>
        </div>
      </div>
    </>
  )
}
