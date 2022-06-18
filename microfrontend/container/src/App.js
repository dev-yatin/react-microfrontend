import { createBrowserHistory } from "history";
import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import HistoryRouter from "./HistoryRouter";

const Marketing = lazy(() => import("./components/Marketing"));

const App = (props) => {
  const history = createBrowserHistory();
  return (
    <React.Fragment>
      <HistoryRouter history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header history={history} />
          <Marketing history={history} />
        </Suspense>
      </HistoryRouter>
    </React.Fragment>
  );
};

export default App;
