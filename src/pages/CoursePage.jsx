import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/features/courseSlice";
import { useParams } from "react-router-dom";
import CourseDetails from "./CourseDetails";
const CoursePage = () => {
  const [courseData, setCourseData] = useState([]);
  const { data, status } = useSelector((state) => state.data);
  const dispath = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    if (status === "idle") {
      dispath(fetchData());
    }
  }, [dispath, status]);

  useEffect(() => {
    if (status === "succeeded") {
      let filteredCourse = data?.filter((course) => +id === course?.id);
      setCourseData(filteredCourse[0]);
    }
  }, [id, data, status]);
  return (
    <div className="w-[75%] bg-white mx-auto rounded-2xl">
      {courseData && <CourseDetails course={courseData} />}
    </div>
  );
};

export default CoursePage;
