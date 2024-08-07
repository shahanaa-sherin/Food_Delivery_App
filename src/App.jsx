import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Body />
    </>
  );
}

export default App;
