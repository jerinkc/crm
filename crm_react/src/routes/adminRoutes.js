import { AdminDashboard } from '../components/adminDashboard/AdminDashboard';
import { CustomerInteractionPanel } from "../components/adminDashboard/CustomerInteractionPanel";
import { CustomerActionPanel } from "../components/adminDashboard/CustomerActionPanel";
import { CustomerDetails } from "../components/adminDashboard/CustomerDetails";
import { NewCustomer } from "../components/adminDashboard/NewCustomer";
import { EditCustomer } from "../components/adminDashboard/EditCustomer";
import { ConfirmCustomerDelete } from "../components/adminDashboard/ConfirmCustomerDelete";
import { Login } from "../components/auth/Login";

const routes = [
  {
    path: 'customers',
    element: <CustomerActionPanel/>,
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
      },
    ],
  },
]

const adminRoutes = [
  {
    path: 'admin',
    element: <AdminDashboard />,
    children: routes
  },
  {
    path: 'login',
    element: <Login />
  },
]

export default adminRoutes;
