import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl"

import routes from "../routes/index"


function Main() {
  // addLocaleData([...en, ...de]);

  const router = createBrowserRouter(routes);

  return (
    // <IntlProvider locale={locale} key={locale} messages={messages}>
      // <FormattedMessage id="welcomeMessage" defaultMessage="Welcome!" />
      <RouterProvider router={router} />
    // </IntlProvider>
  );
}

export default Main;
