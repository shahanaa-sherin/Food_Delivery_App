import Header from "./Components/Header/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import UseOnlineStatus from "./Utils/UseOnlineStatus";





function App() {
  const onlineStatus = UseOnlineStatus();
  if (onlineStatus === false) {
    return (
      <>
      
        <h1 className="err">
          Looks like youre offline !!! Please check your internet connection
        </h1>

      </>
    );
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
