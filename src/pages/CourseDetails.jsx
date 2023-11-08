import Syllabus from "../components/Syllabus";

const CourseDetails = (course) => {
  const {
    name,
    instructor,
    thumbnail,
    duration,
    enrollmentStatus,
    location,
    students,
    description,
    prerequisites,
    syllabus,
  } = course.course;
  return (
    <div>
      <div className="text-black flex flex-col justify-center items-center mt-28">
        <img
          src={thumbnail}
          alt="course-image"
          className="w-[50%] mt-5 md:h-[350px] mx-auto mb-5"
        />
        <h1 className="text-2xl md:text-5xl font-bold text-center">{name}</h1>
        <h2 className="md:text-3xl font-semibold">Instructor: {instructor}</h2>
      </div>
      <div className="text-gray-500 flex flex-col px-6 md:flex-row gap-5 justify-center text-xl py-5">
        <p>🕔 {duration}</p>
        <p
          className={` font-bold ${
            enrollmentStatus === "Open"
              ? "text-green-500"
              : enrollmentStatus === "In Progress"
              ? "text-blue-500"
              : "text-red-500"
          }`}
        >
          🪑 {enrollmentStatus}
        </p>
        <p>📍 {location}</p>
        <p>🎓 Student Enrolled: {students?.length}</p>
      </div>
      <div className="text-gray-500 px-5 md:px-10">
        <div className="mb-5">
          <h3 className="font-bold text-xl md:text-2xl">Description:</h3>
          <p className="md:text-lg">{description}</p>
        </div>
        <div>
          <p className="font-bold text-xl md:text-2xl">Pre-Requisites:</p>
          <ul>
            {prerequisites?.map((p, i) => (
              <li key={i} className="list-item md:text-lg">
                {p}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-gray-500 px-5 md:px-10 pb-10">
        <h2 className="text-xl md:text-3xl font-bold m-4">Syllabus</h2>
        {syllabus?.map((list, i) => {
          return <Syllabus data={list} key={i} />;
        })}
      </div>
    </div>
  );
};

export default CourseDetails;
