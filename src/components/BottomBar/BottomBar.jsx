import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { AiFillClockCircle } from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import MegaMenu from "../MegaMenu/MegaMenu";

function BottomBar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="px-[240px] py-4 bg-white shadow flex justify-between items-center">
      <div className="content-left flex items-center gap-6 font-semibold text-md">
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
        >
          <button className="flex items-center text-white gap-2 bg-[#0373f3] px-[16px] py-[12px] rounded-2xl hover:bg-blue-500">
            <LuMenu />
            <p className="mr-2">Danh Mục Sản Phẩm</p>
            <FiChevronDown />
          </button>

          {openMenu && (
            <div className="absolute top-full left-0 w-[calc(100vw-240px)] bg-white shadow-lg z-50">
              <div >
                <MegaMenu
                  isOpen={openMenu}
                  onClose={() => setOpenMenu(false)}
                />
              </div>
            </div>
          )}
        </div>
        <p>Về Chúng Tôi</p>
        <p>Bài Viết</p>
        <p> Catalog</p>
        <p>Liên Hệ</p>
      </div>
      <div className="content-right flex items-center gap-6  font-semibold text-md">
        <div className="flex items-center gap-2">
          <AiFillClockCircle color="#0373f3" />

          <p>Hỗ trợ 24/7</p>
        </div>
        <div className="flex items-center gap-2">
          <FaHandHoldingUsd color="#0373f3" />

          <p>Miễn phí vận chuyển</p>
        </div>
        <div className="flex items-center gap-2">
          <FaTruck color="#0373f3" />

          <p>Giao hàng nhanh 2h</p>
        </div>
        <div className="flex items-center gap-2">
          <MdChangeCircle color="#0373f3" />

          <p>30 ngày đổi trả</p>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
