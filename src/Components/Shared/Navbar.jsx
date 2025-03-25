import React from "react";
import logo from "../../assets/img/logo.png";
import icon_1 from "../../assets/icons/fi-login.png";
import icon_2 from "../../assets/icons/fi-wishlist.png";
import icon_3 from "../../assets/icons/fi-cart.png";
import { Link } from "react-router";

function Navbar() {
  const menus = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Categories", link: "/categories" },
    { id: 3, name: "Products", link: "/products" },
    { id: 4, name: "Offers", link: "/offers" },
    { id: 5, name: "Blogs", link: "/blogs" },
    { id: 6, name: "Contact", link: "/contact" },
  ];
  return (
    <nav>
      {/* Section 1 */}
      <section className="bg-[#f8f8f8]">
        <div className="p-2 flex justify-between text-sm text-[#878787] m-w">
          <div>+91 98 004 0506</div>

          <div>
            <p>World Fastest Online Shopping Destination</p>
          </div>

          <div>
            <a className="mx-2" href="#">
              Help?
            </a>
            <a className="mx-2" href="#">
              Track?
            </a>
            <a className="mx-2" href="#">
              Order?
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-7 flex justify-between items-center m-w">
        <div>
          <img className="w-[150px]" src={logo} alt="" />
        </div>

        <div>
          <input
            placeholder="Search Produts..."
            type="text"
            className="border border-[#e4e1e1] rounded-sm px-3 py-3 w-[500px]"
          />
        </div>

        <div className="flex">
          <a className="mx-2 flex" href="#">
            <img className="w-10" src={icon_1} alt="" />
            <div>
              <p className="text-sm">Account</p>
              <p className="font-bold">LOGIN</p>
            </div>
          </a>
          <a className="mx-2 flex" href="#">
            <img className="w-10" src={icon_2} alt="" />
            <div>
              <p className="text-sm">Wishlist</p>
              <p className="font-bold">3-ITEMS</p>
            </div>
          </a>
          <a className="mx-2 flex" href="#">
            <img className="w-10" src={icon_3} alt="" />
            <div>
              <p className="text-sm">Cart</p>
              <p className="font-bold">LOGIN</p>
            </div>
          </a>
        </div>
      </section>

      {/* Section 3 */}
      <hr className="border-[#e4e1e1] m-w" />
      <section className="py-2 flex justify-between items-center m-w">
        <button className="bg-[#5CAF90] text-white px-10 py-3 rounded-sm font-bold">
          All Categories
        </button>

        <div className="flex">
          {menus.map((menu) => (
            <Link
              to={menu.link}
              key={menu.id}
              className="mx-5 font-semibold text-[#4B5974]"
            >
              {menu.name}
            </Link>
          ))}
        </div>

        <button className="bg-[#5CAF90] text-white px-10 py-3 rounded-sm font-bold">
          Location ?
        </button>
      </section>
      <hr className="border-[#e4e1e1] m-w" />
    </nav>
  );
}

export default Navbar;
