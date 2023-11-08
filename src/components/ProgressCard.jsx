import { Link } from "react-router-dom";

const ProgressCard = (props) => {
  const { id, thumbnail, name, instructor } = props.course;
  return (
    <div className="w-[320px] h-[460px]  md:w-[360px] md:h-[420px] bg-white text-black rounded-2xl px-10 relative">
      <img src={thumbnail} className="h-[30%] mx-auto ptefrf-5 my-2" />
      <div className="mx-7 text-center h-[130px]">
        <h1 className="text-sm md:text-xl font-semibold text-gray-800">
          {name}
        </h1>
        <p className="text-md font-medium">By {instructor}</p>
      </div>
      <p className="bg-gray-200 w-[80%] mx-auto h-0.5"></p>
      <div className="text-center h-16">
        <p className="mb-2">Progress: {props.width}%</p>
        <div className="h-4 bg-gray-300 w-full rounded-full">
          <p
            className={`h-4 w-[${props.width}%] bg-green-500 rounded-full`}
          ></p>
        </div>
      </div>
      <p className="bg-gray-200 w-[80%] mx-auto h-0.5 mb-2 md:mb-5"></p>
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <button
          className={` rounded-xl ${
            !props.isMarked ? "bg-gray-500" : "bg-gray-50 !text-red-600"
          } text-white text-md w-full md:w-[145px] h-12 p-1 leading-4 shadow-lg`}
          onClick={props.handleClick}
        >
          {!props.isMarked ? "Mark as completed" : "Remove complete"}
        </button>
        <Link to={`/course/${id}`}>
          <button className=" rounded-xl bg-pink-500 text-white text-md w-full md:w-[145px] h-12 shadow-lg">
            View Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProgressCard;
