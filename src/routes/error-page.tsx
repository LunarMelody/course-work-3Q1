import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const maybeStatusText =
    error != null && typeof error === "object" && "statusText" in error
      ? `${error.statusText}`
      : null;

  const maybeMessage =
    error != null && typeof error === "object" && "message" in error ? `${error.message}` : null;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{maybeStatusText || maybeMessage}</i>
      </p>
    </div>
  );
}
