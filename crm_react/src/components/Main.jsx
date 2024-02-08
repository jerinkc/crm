import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AdminDashboard } from './adminDashboard/AdminDashboard'
import { CustomerInteractionPanel } from "./adminDashboard/CustomerInteractionPanel"
import { CustomerActionPanel } from "./adminDashboard/CustomerActionPanel"
import { CustomerDetails } from "./adminDashboard/CustomerDetails"
import { NewCustomer } from "./adminDashboard/NewCustomer";
import { EditCustomer } from "./adminDashboard/EditCustomer";

function Main() {
  const router = createBrowserRouter([
    {
      path: 'admin',
      element: <AdminDashboard/>,
      children: [
        {
          path: 'customers',
          element: <CustomerActionPanel/>,
          children: [
            {
              path: ':customerId',
              element: <CustomerInteractionPanel/>
            },
            {
              path: ':customerId/about',
              element: <CustomerDetails/>
            },
            {
              path: ':customerId/edit',
              element: <EditCustomer/>
            },
            {
              path: 'new',
              element: <NewCustomer/>
            }
          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default Main
