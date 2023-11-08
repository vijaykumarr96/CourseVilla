import "./App.css";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import DashBoard from "./pages/DashBoard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route exact="true" path="/" element={<Courses />}></Route>
          <Route
            exact="true"
            path="course/:id"
            element={<CoursePage />}
          ></Route>
          <Route exact="true" path="dashboard" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
