import Button from "../Button";

const DashboardHeading = () => {
  return (
    <div className="w-full flex items-center justify-between mt-14 pb-6 border-b border-b-dashboardBorder">
      <h1 className="text-themeBlackBold text-2xl font-semibold">
        Admin Dashboard
      </h1>

      <Button bgColorCode="#DE3435" text="Upload Products" />
    </div>
  );
};

export default DashboardHeading;
