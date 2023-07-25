const FilterHeading = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-2xl text-categoryText font-semibold">Category</p>

      <div className="flex items-center gap-3">
        <p className="text-categoryText">Sort By:</p>
        <div className="py-2 px-4 border border-dashboardBorder rounded-lg cursor-pointer">
          <select className="bg-transparent w-full text-categoryText">
            <option value="Featured">Featured</option>
            <option value="FeaturedTwo">Featured Two</option>
            <option value="FeaturedThree">Featured Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterHeading;
