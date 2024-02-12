import adminRoutes from "./adminRoutes"
import PageNotFound from "../components/common/PageNotFound";

const routes = [
  ...adminRoutes,
  {
    path: '*',
    element: <PageNotFound/>
  }
]

export default routes;
