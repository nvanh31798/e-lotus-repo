import { Outlet } from "react-router-dom";
import "./App.scss";
import { SearchBar } from "./client/common-components/SearchBar/SearchBar";
import { TabBar } from "./client/common-components/TabBar/TabBar";

function App() {
  return (
    <div>
      <h1>ELotus interview test</h1>
      <TabBar />
      <SearchBar />
      <Outlet />
    </div>
  );
}

export default App;
