interface SupportCardPorps {
  img: string;
  heading: string;
  content: string;
}

const SupportCard: React.FC<SupportCardPorps> = ({ img, heading, content }) => {
  return (
    <div className="w-full flex items-center justify-center gap-6">
      <img src={img} alt="support" />

      {/* content */}
      <div>
        <p className="text-2xl font-bold text-themeBlackBold pb-2">{heading}</p>

        <span className="text-[17px] text-placeholderColor">{content}</span>
      </div>
    </div>
  );
};

export default SupportCard;
