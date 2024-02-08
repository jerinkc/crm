import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AdminDashboard } from './adminDashboard/AdminDashboard'
import { CustomerInteractionPanel } from "./adminDashboard/CustomerInteractionPanel"
import { CustomerActionPanel } from "./adminDashboard/CustomerActionPanel"
import { CustomerDetails } from "./adminDashboard/CustomerDetails"
import { NewCustomer } from "./adminDashboard/NewCustomer";

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
              element: <h1>CustomerEditPanel</h1>
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
