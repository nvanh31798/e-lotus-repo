import { useRouteError } from "react-router-dom";

interface RouterError {
    statusText:string,
    message:string
}

export const ErrorPage = () => {
  const { statusText, message } = useRouteError() as RouterError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
};
