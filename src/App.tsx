import { Outlet } from "react-router-dom";
import "./App.scss";
import "./styles/scss/style.scss";
import AppContainer from "./client/entry/AppContainer";
import { NavBar } from "./client/common-components/NavBar/NavBar";

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Outlet />
    </AppContainer>
  );
}

export default App;
