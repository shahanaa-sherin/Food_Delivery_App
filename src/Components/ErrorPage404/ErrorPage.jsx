import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <div className="err-container">
        <h1 className="err"> {err.status}</h1>
        <h2>Oops, the page you are looking for does not exist.</h2>
        <h3>{err.statusText || err.message}</h3>
      </div>
    </>
  );
};

export default ErrorPage;
