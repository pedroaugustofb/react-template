import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//Pages
import Error404 from "./pages/404";
import useAuthStore from "./features/auth/store";
import Home from "./pages/home";

// This is a protected route, it will only render the element if the user is logged in
const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const { user } = useAuthStore();

  if (user === null) return <Navigate to={"/"} />;

  return element;
};

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* This is an example to show how to use a Public Route */}
          <Route path="/dashboard" element={<ProtectedRoute element={<h1>dashboard</h1>} />} /> {/* This is an example to show how to use Protected Route */}
          <Route path="*" element={<Error404 />} /> {/* Route 404 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
