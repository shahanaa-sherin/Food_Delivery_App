import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import Errpage from "../../assets/Images/something-lost.webp";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <div className="err-container">
        <img src={Errpage} alt="" className="err-img"/>
        <h2 className="err-msg">Oops, the page you are looking for does not exist.</h2>
      </div>
    </>
  );
};

export default ErrorPage;
