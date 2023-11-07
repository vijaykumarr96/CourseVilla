const CourseDetails = (course) => {
  //   console.log(course);
  const { thumbnail } = course.course;
  return (
    <div>
      <img src={thumbnail} alt="course-image" />
      <div>
        <h1 className="text-purple-200 mt-36">Hello</h1>
      </div>
    </div>
  );
};

export default CourseDetails;
