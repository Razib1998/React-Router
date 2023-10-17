import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="text-2xl text-center">
            <h2>Oops!!</h2>
            <p>Something went wrong</p>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                </div>
            }
        </div>
    );
};

export default ErrorPage;