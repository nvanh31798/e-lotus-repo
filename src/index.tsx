import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./core/redux/store/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { generateRoutes } from "./client/routes/routes";

const { router } = generateRoutes();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
