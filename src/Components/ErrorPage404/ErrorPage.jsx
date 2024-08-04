import { useRouteError } from 'react-router-dom'
import './ErrorPage.css'

const ErrorPage = () => {
    const err = useRouteError()
    console.log(err);
    
  return (
    <>
    <div className="err-container">
        <h1 className='err'>OOPS!!!</h1>
        <h3>Something went wrong</h3>
        <h3>{err.status}:{err.statusText || err.message}</h3>
    </div>
    </>
  )
}

export default ErrorPage
