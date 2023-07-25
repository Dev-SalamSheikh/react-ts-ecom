import ProjectUploadCard from "./ProjectUploadCard";

const UploadProductsContainer = () => {
  return (
    <div className="py-16">
      {/* Cards*/}
      <ProjectUploadCard key="card-1" />
      <ProjectUploadCard key="card-2" />
      <ProjectUploadCard key="card-3" />
      <ProjectUploadCard key="card-4" />
      <ProjectUploadCard key="card-5" />
      <ProjectUploadCard key="card-6" />

      {/* Buttons */}
      <div className="text-center mt-20">
        <button className="px-6 py-3 border border-categoryBorder rounded-lg">
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadProductsContainer;
