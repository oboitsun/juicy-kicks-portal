import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./common.scss";
import HomeDashboard from "./components/HomeDashboard";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Marketplace from "./pages/Marketplace/Marketplace";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        >
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
