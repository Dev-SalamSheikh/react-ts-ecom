import ProjectUploadCard from "./ProjectUploadCard";

const UploadProductsContainer = () => {
  return (
    <div className="py-16">
      {/* Cards*/}
      <ProjectUploadCard />
      <ProjectUploadCard />
      <ProjectUploadCard />
      <ProjectUploadCard />
      <ProjectUploadCard />
      <ProjectUploadCard />

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
