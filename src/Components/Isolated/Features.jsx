import React from "react";
import icon_1 from "../../assets/icons/fi-shipping.png";
import icon_2 from "../../assets/icons/fi-support.png";
import icon_3 from "../../assets/icons/fi-return.png";
import icon_4 from "../../assets/icons/fi-payment.png";

function Features() {
  const features = [
    {
      id: 1,
      feature: "Free Shipping",
      description: "Free shipping on all US order or order above $200",
      icon: icon_1,
    },
    {
      id: 2,
      feature: "24X7 Support",
      description: "Contact us 24 hours a day, 7 days a week",
      icon: icon_2,
    },
    {
      id: 3,
      feature: "30 Days Return",
      description: "Simply return it within 30 days for an exchange",
      icon: icon_3,
    },
    {
      id: 4,
      feature: "Payment Secure",
      description: "Make your payment secure and safe",
      icon: icon_4,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-10 my-10">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="border border-[#e4e1e1] text-center flex flex-col items-center p-10 bg-white rounded-sm"
        >
          <img className="w-10 mb-2" src={feature.icon} alt="" />
          <h5 className="font-bold text-xl">{feature.feature}</h5>
          <p className="text-[#848484]">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
