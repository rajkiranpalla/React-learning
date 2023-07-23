import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (<>
    <h1> Error Page</h1>
    <p>{err.status + ":" + err.statusText}</p>
    </>
    )
}

export default ErrorPage;