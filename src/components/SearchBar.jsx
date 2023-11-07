const SearchBar = () => {
  return (
    <div className="w-full ">
      <input
        type={"search"}
        placeholder="Find your course here..."
        className="w-full p-4 bg-white rounded-full text-black px-10 md:text-2xl"
      />
    </div>
  );
};

export default SearchBar;
