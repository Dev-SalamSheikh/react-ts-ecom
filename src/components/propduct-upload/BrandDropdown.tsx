const BrandDropdown = () => {
  return (
    <div className="w-6/12 flex items-center gap-4 justify-between">
      <div>
        <p className="text-categoryText">Brand:</p>
      </div>

      {/* Dropdown */}
      <div className="w-full py-2 px-4 border border-dashboardBorder rounded-lg">
        <select className="bg-transparent outline-none border-none text-categoryText w-full cursor-pointer">
          <option value="Nike">Nike</option>
        </select>
      </div>
    </div>
  );
};

export default BrandDropdown;
