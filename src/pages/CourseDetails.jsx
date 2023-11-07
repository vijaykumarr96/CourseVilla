import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/features/CourseSlice";
import { useParams } from "react-router-dom";
const CourseDetails = () => {
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
      setCourseData(filteredCourse);
    }
  }, [id, data, status]);
  // console.log(courseData[0]);
  return (
    <div>
      <h1 className="text-purple-200 mt-36">Hello</h1>
    </div>
  );
};

export default CourseDetails;
