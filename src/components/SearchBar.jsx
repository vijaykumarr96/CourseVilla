import { useDispatch, useSelector } from "react-redux";
import { updateInputSearch } from "../redux/features/inputSlice";

const SearchBar = () => {
  const dispath = useDispatch();
  const { text } = useSelector((state) => state.inputSearch);
  const handleSearch = (e) => {
    dispath(updateInputSearch(e.target.value));
  };
  return (
    <div className="w-full ">
      <input
        type={"search"}
        placeholder="find course by name or author..."
        className="w-full p-4 bg-white rounded-full text-black px-10 md:text-2xl"
        value={text}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
