import ProjectUploadCard from "./ProjectUploadCard";

const UploadProductsContainer = () => {
  return (
    <div className="py-8 md:py-16">
      {/* Cards*/}
      <ProjectUploadCard key="card-1" />
      <ProjectUploadCard key="card-2" />
      <ProjectUploadCard key="card-3" />
      <ProjectUploadCard key="card-4" />
      <ProjectUploadCard key="card-5" />
      <ProjectUploadCard key="card-6" />

      {/* Buttons */}
      <div className="text-center md:mt-20 mt-14">
        <button className="px-6 py-3 md:text-base text-sm border border-categoryBorder rounded-lg">
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadProductsContainer;
