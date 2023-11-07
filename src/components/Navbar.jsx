const Navbar = () => {
  return (
    <div className="h-20 w-full bg-white text-gray-800 flex justify-between fixed top-0 z-10 items-center px-14">
      <img src="./coursevilla.svg" alt="logo" width={40} height={40} />
      <div>
        <button className="md:text-xl text-md font-semibold text-secondary">
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Navbar;
