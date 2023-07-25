import Support from "../../assets/support.png";
import Return from "../../assets/return.png";
import Payment from "../../assets/payment.png";

import SupportCard from "./SupportCard";

const BenifitsCard = () => {
  // Support Card Data
  const supportData = [
    {
      id: 1,
      img: Support,
      heading: "Support 24/7",
      content: "Quick Support",
    },
    {
      id: 2,
      img: Return,
      heading: "15 Days Return",
      content: "Product Exchange",
    },
    {
      id: 3,
      img: Payment,
      heading: "Payment Secure",
      content: "100% payment secure",
    },
  ];
  return (
    <div className="mt-14 mb-14 bg-white shadow-supprtShadow py-16 flex items-center justify-between gap-8">
      {supportData?.map((item) => {
        const { id, content, heading, img } = item;
        return (
          <SupportCard content={content} key={id} heading={heading} img={img} />
        );
      })}
    </div>
  );
};

export default BenifitsCard;
