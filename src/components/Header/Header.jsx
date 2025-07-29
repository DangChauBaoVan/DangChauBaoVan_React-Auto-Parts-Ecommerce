import React, { useState } from "react";

import TopBar from "../TopBar/TopBar";
import { FiSearch, FiCamera, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaRegFlag } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import { MdStar } from "react-icons/md";
import { PiBasketFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import BottomBar from "../BottomBar/BottomBar";
import cartItems from "../../data/cartItem";
import Cart from "../Cart/Cart";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div>
      <TopBar />
      <nav className="bg-white shadow">
        <div className="px-[240px] py-[4px] flex justify-between items-center  relative">
          {/* Logo */}
          <div className="w-[250px] h-[111px] overflow-hidden [clip-path:ellipse(50%_50%_at_50%_50%)] relative">
            <img
              src={logo}
              alt="SUNFIL Logo"
              className="absolute top-[-16px] left-[1px] w-[280px] h-[144px] scale-[1.1]"
            />
          </div>

          {/* Thanh tìm kiếm */}
          <div className="flex items-center p-[8px] pl-[20px] w-[739px] h-[64px] border-2 border-[#0373f3]  rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Tìm sản phẩm"
              className="flex-1 px-[24px] py-[12px] text-sm outline-none font-[24px]"
            />
            <button className=" text-gray-500 pr-[24px]">
              <FiCamera size={25} />
            </button>
            <button className="bg-blue-500 text-white  px-[24px] py-[12px] rounded-full">
              <FiSearch size={28} />
            </button>
          </div>

          {/* Tiện ích bên phải */}
          <div className="flex items-center gap-6 text-sm">
            {/* Ngôn ngữ */}
            <div className="flex items-center gap-1 cursor-pointer ">
              <div className="flag-icon bg-[#D80027] rounded-full w-[36px] h-[36px] flex items-center justify-center">
                <MdStar color="#FFDA44" size={18} />
              </div>
              <p className="font-[16px] font-weight-bold">VI</p>
            </div>

            {/* Giỏ hàng */}
            <div
              className="relative flex items-center gap-1 cursor-pointer "
              onMouseEnter={() => setIsCartOpen(true)}
              onMouseLeave={() => setIsCartOpen(false)}
            >
              <PiBasketFill size={26} className="mr-3" />
              <span>Giỏ hàng</span>
              <span className="absolute -top-3 left-5 bg-[#FF5630] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                12
              </span>
              {isCartOpen && (
                <div className="absolute top-full left-0 z-50 mt-2 before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-4 before:bg-transparent">
                  <Cart items={cartItems} />
                </div>
              )}
            </div>

            {/* Tài khoản */}
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="icon-user bg-[#0373f3] rounded-full w-[36px] h-[36px] flex items-center justify-center">
                <FaUser size={22} color="#fff" />
              </div>
              <span>Tài khoản</span>
            </div>
          </div>
        </div>
      </nav>
      <BottomBar />
    </div>
  );
}

export default Header;
