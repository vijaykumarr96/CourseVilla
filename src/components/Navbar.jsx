const Navbar = () => {
  return (
    <div className="h-20 bg-white text-gray-800 mb-10 flex justify-between items-center px-14">
      <img src="./coursevilla.svg" alt="logo" width={40} height={40} />
      <div>
        <button className="text-xl font-semibold text-secondary">
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Navbar;
