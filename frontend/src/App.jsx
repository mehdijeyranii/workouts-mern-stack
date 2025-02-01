import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <div className="max-w-screen-xl p-5 mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
