import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Waiver from "./pages/Waiver";

/** main app */
export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" index element={<Main />} />
      <Route path="/waiver" element={<Waiver />} />
    </Routes>
  );
}
