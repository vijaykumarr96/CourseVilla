import { useState } from "react";

const Syllabus = (data) => {
  const { week, topic, content } = data.data;
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className="border border-1 w-full rounded-lg mx-auto p-3 mb-3">
      <div className="flex text-xl  justify-between items-center pr-10">
        <h3 className="font-semibold">Week: {week}</h3>
        <p
          className="text-4xl bg-white p-2 outline-none cursor-pointer transition-transform"
          onClick={() => setIsExpand(!isExpand)}
        >
          {isExpand ? "-" : "+"}
        </p>
      </div>
      <div
        className={` transition-all ease-in duration-500 ${
          isExpand ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <p>{topic}</p> <p>{content}</p>
      </div>
    </div>
  );
};

export default Syllabus;
