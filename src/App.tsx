import { Outlet } from "react-router-dom";
import "./App.scss";
import "./styles/scss/style.scss";
import AppContainer from "./client/entry/AppContainer";
import { NavBar } from "./client/common-components/NavBar/NavBar";
import { Toast } from "./client/common-components/Toast/Toast";

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Outlet />
      <Toast/>
    </AppContainer>
  );
}

export default App;
