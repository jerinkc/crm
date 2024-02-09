import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import { AdminDashboard } from './adminDashboard/AdminDashboard';
import { CustomerInteractionPanel } from "./adminDashboard/CustomerInteractionPanel";
import { CustomerActionPanel } from "./adminDashboard/CustomerActionPanel";
import { CustomerDetails } from "./adminDashboard/CustomerDetails";
import { NewCustomer } from "./adminDashboard/NewCustomer";
import { EditCustomer } from "./adminDashboard/EditCustomer";
import { ConfirmCustomerDelete } from "./adminDashboard/ConfirmCustomerDelete";
import { Login } from "./auth/Login";

function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 text-center">
        <h1>404 - Page Not Found</h1>
        <p>Here are some helpful links:</p>
        <Link to='/admin' className="">Admin</Link>
      </div>
    </div>
  );
}

function Main() {
  const router = createBrowserRouter([
    {
      path: 'admin',
      element: <AdminDashboard />,
      children: [
        {
          path: 'customers',
          element: <CustomerActionPanel />,
          children: [
            {
              path: ':customerId',
              element: <CustomerInteractionPanel />
            },
            {
              path: ':customerId/about',
              element: <CustomerDetails />
            },
            {
              path: ':customerId/edit',
              element: <EditCustomer />
            },
            {
              path: 'new',
              element: <NewCustomer />
            },
            {
              path: ':customerId/delete',
              element: <ConfirmCustomerDelete />
            }
          ]
        }
      ]
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default Main;
