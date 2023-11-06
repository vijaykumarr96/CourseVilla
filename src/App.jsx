import "./App.css";
import CourseCard from "./components/CourseCard";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="w-[80%] mx-auto flex flex-col md:flex-row md:flex-wrap gap-5">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </main>
    </>
  );
}

export default App;
