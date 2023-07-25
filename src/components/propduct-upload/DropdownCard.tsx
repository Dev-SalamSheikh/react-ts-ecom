type ItemType = {
  id: number;
  title: string;
  image: string;
};

type DropdownCardProps = {
  data?: ItemType[];
  heading: string;
};

const DropdownCard: React.FC<DropdownCardProps> = ({ data, heading }) => {
  return (
    <div>
      {/* heading */}
      <div className="mt-10 mb-3 pb-3 border-b border-b-dashboardBorder">
        <h1 className="text-placeholderColor2 font-semibold text-xl">
          {heading}
        </h1>
      </div>

      <ul>
        {data?.map((item) => {
          const { id, image, title } = item;

          return (
            <div key={id} className="flex items-center gap-1">
              <input
                type="checkbox"
                id={title}
                className="accent-themeOrange scale-110"
              />

              <label
                className="flex items-center gap-2 px-3 py-2 bg-transparent rounded-lg cursor-pointer"
                htmlFor={title}
              >
                <img src={image} alt={title} />
                <p className="text-dropdownText">{title}</p>
              </label>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownCard;
