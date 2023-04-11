import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Waiver from "./pages/Waiver";
import Navbar from "./components/Navigation/Navbar";

/** main app */
export default function App(): JSX.Element {
  const location = useLocation();

  // Define an array of route paths where the navbar should not be displayed
  const noNavbarRoutes = ["/waiver"];

  // Check if the current route path matches any value in the array
  const shouldDisplayNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldDisplayNavbar && <Navbar />}
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/waiver" element={<Waiver />} />
      </Routes>
    </>
  );
}
