import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/features/CourseSlice";
import ProgressCard from "../components/ProgressCard";
const DashBoard = () => {
  const [courseInProgress, setCourseInProgress] = useState([]);
  const [isMarked, setIsMarked] = useState(false);
  const { data, status } = useSelector((state) => state.data);
  const dispath = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispath(fetchData());
    }
  }, [dispath, status]);

  useEffect(() => {
    if (status === "succeeded") {
      let courses = data?.find(
        (course) => course.enrollmentStatus === "In Progress"
      );

      setCourseInProgress([courses]);
    }
  }, [data, status]);
  //   console.log(courseInProgress);

  console.log(isMarked);
  return (
    <div className="mt-36 mx-10">
      <div className="bg-white text-gray-500  rounded-xl mb-10 p-4">
        <h1>Courses in Progress : {courseInProgress.length}</h1>
      </div>
      <div className="mb-5">
        {courseInProgress?.map((course) => {
          console.log({ course });
          return <ProgressCard key={course.id} course={course} />;
        })}
      </div>
      <div className="bg-white text-gray-500  rounded-xl mb-10 p-4">
        <h1>Courses Completed : {courseInProgress.length}</h1>
      </div>
    </div>
  );
};

export default DashBoard;
