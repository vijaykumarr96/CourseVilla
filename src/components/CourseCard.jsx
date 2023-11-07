const CourseCard = (course) => {
  const {
    thumbnail,
    name,
    instructor,
    description,
    duration,
    location,
    enrollmentStatus,
  } = course.course;
  return (
    <div className="w-[300px] h-[400px]  md:w-[360px] md:h-[420px] bg-white text-black rounded-2xl relative">
      <img src={thumbnail} className="h-[30%] mx-auto ptefrf-5 my-2" />
      <div className="mx-7 text-center h-[130px]">
        <h1 className="text-sm md:text-xl font-semibold text-gray-800">
          {name}
        </h1>
        <p className="text-md font-medium">By {instructor}</p>
        <p
          className={`text-gray-500 pb-3 ${
            description.length > 100
              ? `text-ellipsis whitespace-nowrap overflow-hidden`
              : ""
          }`}
        >
          {description}
        </p>
      </div>
      <p className="bg-gray-200 w-[80%] mx-auto h-0.5"></p>
      <div className="flex justify-around p-4 text-gray-900 text-sm md:text-lg">
        <p>{location}</p> |<p>{duration}</p> |
        <p className="text-green-500 font-bold">{enrollmentStatus}</p>
      </div>
      <p className="bg-gray-200 w-[80%] mx-auto h-0.5 mb-5"></p>
      <button className=" rounded-xl bg-pink-500 text-white text-md absolute right-8 w-[145px] h-12 shadow-lg">
        View Course
      </button>
    </div>
  );
};

export default CourseCard;
