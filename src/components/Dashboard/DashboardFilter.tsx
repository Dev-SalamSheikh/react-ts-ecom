import Button from "../Button";

const DashboardFilter = () => {
  return (
    <div className="w-full flex items-center gap-2 pt-6">
      {/* left side */}
      <div className="w-full p-3 border border-dashboardBorder rounded-lg flex items-center justify-between gap-1">
        {/* Input field */}
        <div className="w-8/12 flex items-center justify-between gap-1">
          <img src="./images/search.png" alt="search_icon" />
          <input
            type="text"
            placeholder="Search for product"
            className="bg-transparent w-full h-full border-none outline-none placeholder:text-sm text-sm"
          />
        </div>

        {/* brand Dropdown */}
        <div className="w-4/12 px-4 border-x border-x-dashboardBorder">
          <select className="text-placeholderColor2 w-full text-sm outline-none border-none bg-transparent">
            <option value="brand">Brand</option>
            <option value="nike">Nike</option>
            <option value="apple">Apple</option>
          </select>
        </div>

        {/* Category Dropdown */}
        <div className="w-4/12 pl-4">
          <select className="text-placeholderColor2 w-full text-sm outline-none border-none bg-transparent">
            <option value="category">Category</option>
            <option value="nike">Nike</option>
            <option value="apple">Apple</option>
          </select>
        </div>
      </div>

      {/* right side */}
      <div className="w-full">
        <Button bgColorCode="#000" text="Search" />
      </div>
    </div>
  );
};

export default DashboardFilter;
