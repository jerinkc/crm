import { AdminDashboard } from '../components/adminDashboard/AdminDashboard';
import { CustomerInteractionPanel } from "../components/adminDashboard/CustomerInteractionPanel";
import { Admin } from "../components/admin/Admin";
import { CustomerDetails } from "../components/adminDashboard/CustomerDetails";
import { NewCustomer } from "../components/adminDashboard/NewCustomer";
import { EditCustomer } from "../components/adminDashboard/EditCustomer";
import { ConfirmCustomerDelete } from "../components/adminDashboard/ConfirmCustomerDelete";
import { Login } from "../components/auth/Login";

const routes = [
  {
    path: '',
    element: <AdminDashboard/>,
    children: [
      {
        path: 'customers/:customerId',
        element: <CustomerInteractionPanel />
      },
      {
        path: 'customers/:customerId/about',
        element: <CustomerDetails />
      },
      {
        path: 'customers/:customerId/edit',
        element: <EditCustomer />
      },
      {
        path: 'customers/new',
        element: <NewCustomer />
      },
      {
        path: 'customers/:customerId/delete',
        element: <ConfirmCustomerDelete />
      },
    ],
  },
  {
    path: 'login',
    element: <Login/>
  },
]

const adminRoutes = [
  {
    path: 'admin',
    element: <Admin/>,
    children: routes
  }
]

export default adminRoutes;
