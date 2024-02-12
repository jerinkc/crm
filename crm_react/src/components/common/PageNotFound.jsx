import { Link } from "react-router-dom";

function PageNotFound() {
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

export default PageNotFound;
