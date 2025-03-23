import React from "react";
import logo from "../../assets/img/logo.png";

function Navbar() {
  const menus = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Categories", link: "/" },
    { id: 3, name: "Products", link: "/" },
    { id: 4, name: "Offers", link: "/" },
    { id: 5, name: "Blogs", link: "/" },
    { id: 6, name: "Contact", link: "/" },
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

        <div>
          <a className="mx-2" href="#">
            Login
          </a>
          <a className="mx-2" href="#">
            Wishlist
          </a>
          <a className="mx-2" href="#">
            Cart
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
            <a
              href="#"
              key={menu.id}
              className="mx-5 font-semibold text-[#4B5974]"
            >
              {menu.name}
            </a>
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
