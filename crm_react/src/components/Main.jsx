import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AdminDashboard } from './adminDashboard/AdminDashboard'
import { CustomerInteractionPanel } from "./adminDashboard/CustomerInteractionPanel"
import { CustomerActionPanel } from "./adminDashboard/CustomerActionPanel"
import { CustomerDetails } from "./adminDashboard/CustomerDetails"

function Main() {
  const router = createBrowserRouter([
    {
      path: 'admin',
      element: <AdminDashboard/>,
      children: [
        {
          path: 'customers/:customerId',
          element: <CustomerActionPanel/>,
          children: [
            {
              path: '',
              element: <CustomerInteractionPanel/>
            },
            {
              path: 'about',
              element: <CustomerDetails/>
            },
            {
              path: 'edit',
              element: <h1>CustomerEditPanel</h1>
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
