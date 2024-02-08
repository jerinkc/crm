import { useState, useEffect } from "react";

import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext";
import adminCustomerApis from "../../apis/admin/customers"
import { CustomerDetails } from "./CustomerDetails";

export function ConfirmCustomerDelete(){

  return(
    <>
      <CustomerDetails/>
      <div class="card">
        <div class="card-body">
          Please confirm to delete<br/><br/>
          <button type="button" class="btn btn-danger disabled">Danger</button>
        </div>
      </div>
    </>
  )
}
