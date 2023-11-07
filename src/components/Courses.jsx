import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../redux/features/CourseSlice";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
const Courses = () => {
  const [courseData, setCourseData] = useState([]);
  const { data, status } = useSelector((state) => state.data);

  const dispath = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispath(fetchData());
    }
  }, [status, dispath]);

  useEffect(() => {
    if (status === "succeeded") {
      setCourseData(data);
    }
  }, [data, status]);
  return (
    <div className="w-[80%] mx-auto flex flex-col md:flex-row md:flex-wrap gap-5">
      <SearchBar />
      {courseData &&
        courseData.map((course) => {
          console.log(course);
          return <CourseCard key={course.id} course={course} />;
        })}
    </div>
  );
};

export default Courses;
