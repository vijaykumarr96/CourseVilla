import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/features/courseSlice";
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
  function handleClick() {
    setIsMarked(!isMarked);
  }
  const width = 50;

  return (
    <div className="mt-36 mx-10">
      <div className="bg-white text-gray-500  rounded-xl mb-10 p-4">
        <h1 className="text-green-500 text-4xl font-semibold">
          Courses in Progress
        </h1>
      </div>
      <div className="mb-5">
        {!isMarked &&
          courseInProgress?.map((course) => {
            return (
              <ProgressCard
                key={course.id}
                course={course}
                handleClick={handleClick}
                isMarked={isMarked}
                width={width}
              />
            );
          })}
      </div>
      <div className="bg-white text-gray-500  rounded-xl mb-10 p-4">
        <h1 className="text-red-500 text-4xl font-semibold">
          Courses Completed
        </h1>
      </div>
      <div className="mb-5">
        {isMarked &&
          courseInProgress?.map((course) => {
            return (
              <ProgressCard
                key={course.id}
                course={course}
                handleClick={handleClick}
                isMarked={isMarked}
                width={100}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DashBoard;
