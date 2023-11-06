import courseModel from "../assets/utils";
import { useEffect } from "react";
import { fetchData } from "../features/CourseSlice";
import { useDispatch, useSelector } from "react-redux";
const CourseCard = () => {
  //   const dispatch = useDispatch();
  //   console.log(dispatch(fetchData()));
  //   console.log(fetchData());
  const { data, status } = useSelector((state) => state.data);

  const dispath = useDispatch();
  useEffect(() => {
    if (status === "Idle") {
      dispath(fetchData());
    }
  }, [dispath, status]);

  useEffect(() => {
    if (status === "succeeded") {
      console.log(data);
      //   let courseData = data?.filter((course) => {
      //     return course?.id === parseInt(id);
      //   });
      //   if (courseData.length === 1) {
      //     setTimeout(() => {
      //       //   setLoading(false);
      //     }, 1000);
      //     console.log(courseData);
      //     // setCourseData(courseData[0]);
      //     // setIsValid(true);
      //   } else {
      //     setTimeout(() => {
      //       //   setLoading(false);
      //     }, 1000);
      // setIsValid(false);
    }
  }, [data, status]);
  console.log(data);
  return (
    <div className="w-[320px] h-[400px]  md:w-[360px] md:h-[420px] bg-white text-black rounded-2xl relative">
      <img src={courseModel.thumbnail} className="h-[30%] mx-auto pt-5 mb-2" />
      <div className="mx-7 text-center">
        <h1 className="text-sm md:text-xl font-semibold text-gray-800">
          {courseModel.name}
        </h1>
        <p className="text-md font-medium">By {courseModel.instructor}</p>
        <p className="text-gray-500 pb-3">{courseModel.description}</p>
      </div>
      <p className="bg-gray-200 w-[80%] mx-auto h-0.5"></p>
      <div className="flex justify-around p-4 text-gray-900 text-sm md:text-lg">
        <p>{courseModel.location}</p> |<p>{courseModel.duration}</p> |
        <p className="text-green-500 font-bold">
          {courseModel.enrollmentStatus}
        </p>
      </div>
      <p className="bg-gray-200 w-[80%] mx-auto h-0.5 mb-2"></p>
      <button className=" rounded-xl bg-pink-500 text-white text-md absolute right-8 w-[145px] h-12 shadow-lg">
        View Course
      </button>
    </div>
  );
};

export default CourseCard;
