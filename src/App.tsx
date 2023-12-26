import Router from "./Router";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for the toast notifications

export default function App() {
  return (
    <>
      {/* If you have an commom navbar/footer for example, you should place it here. */}
      <Router />
    </>
  );
}
