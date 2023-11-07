import "./App.css";
import CourseCard from "./components/CourseCard";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Courses />
      </main>
    </>
  );
}

export default App;
