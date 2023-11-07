import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../redux/features/CourseSlice";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
const Courses = () => {
  const [courseData, setCourseData] = useState([]);
  const { data, status } = useSelector((state) => state.data);
  const { text } = useSelector((state) => state.inputSearch);
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

  const filteredCourses = (course) => {
    let lowerText = text.toLowerCase();
    return course?.name.toLowerCase().indexOf(lowerText) !== -1 ||
      course?.instructor.toLowerCase().indexOf(lowerText) !== -1
      ? true
      : false;
  };
  console.log(text);
  return (
    <div className="w-[80%] mx-auto flex flex-col md:flex-row md:flex-wrap gap-5">
      <SearchBar />
      {courseData &&
        courseData
          .filter((course) => {
            return filteredCourses(course);
          })
          .map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
    </div>
  );
};

export default Courses;
