const BrandDropdown = () => {
  return (
    <div className="w-6/12 flex items-center gap-4 justify-between">
      <div>
        <p className="text-categoryText md:text-base text-sm">Brand:</p>
      </div>

      {/* Dropdown */}
      <div className="w-full py-2 md:px-4 px-2 border border-dashboardBorder rounded-lg">
        <select className="bg-transparent outline-none border-none text-categoryText w-full cursor-pointer md:text-base text-sm">
          <option value="Nike">Nike</option>
        </select>
      </div>
    </div>
  );
};

export default BrandDropdown;
