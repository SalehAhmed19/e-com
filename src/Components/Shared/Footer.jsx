import React from "react";
import logo from "../../assets/img/logo.png";

function Footer() {
  const categories = [
    { id: 1, category: "Dried Fruits" },
    { id: 2, category: "Cookies" },
    { id: 3, category: "Food" },
    { id: 4, category: "Fresh Fruits" },
    { id: 5, category: "Tuber Roots" },
    { id: 6, category: "Vegitables" },
  ];

  const company = [
    { id: 1, option: "About Us" },
    { id: 2, option: "Delovery" },
    { id: 3, option: "Legal Notice" },
    { id: 4, option: "Terms & Conditions" },
    { id: 5, option: "Secure Payments" },
    { id: 6, option: "Contact Us" },
  ];

  const account = [
    { id: 1, option: "Sign In" },
    { id: 2, option: "View Cart" },
    { id: 3, option: "Return Policy" },
    { id: 4, option: "Become a Vendor" },
    { id: 5, option: "Affiliate Program" },
    { id: 6, option: "Payments" },
  ];

  return (
    <footer className="m-w">
      <hr className="border-[#e4e1e1]" />
      <div className="grid grid-cols-5 gap-5 pt-20">
        <div>
          <img className="w-[150px]" src={logo} alt="" />
          <p className="text-[#878787] font-semibold my-5">
            Grabit is a biggest market of grocery products. Get your daily needs
            form our store.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl">Category</h3>
          <hr className="border-[#e4e1e1] my-3" />
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                className="my-3 text-[#878787] font-semibold"
              >
                {category.category}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl">Company</h3>
          <hr className="border-[#e4e1e1] my-3" />
          <ul>
            {company.map((company) => (
              <li
                key={company.id}
                className="my-3 text-[#878787] font-semibold"
              >
                {company.option}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl">Account</h3>
          <hr className="border-[#e4e1e1] my-3" />
          <ul>
            {account.map((account) => (
              <li
                key={account.id}
                className="my-3 text-[#878787] font-semibold"
              >
                {account.option}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl">Category</h3>
          <hr className="border-[#e4e1e1] my-3" />
          <ul>
            <li className="my-3 text-[#878787] font-semibold">
              2548 Broaddus Maple Court, Madisonbville KY, 4783 USA
            </li>
            <li className="my-3 text-[#878787] font-semibold">
              +900 866 757676
            </li>
            <li className="my-3 text-[#878787] font-semibold">
              example@mail.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
