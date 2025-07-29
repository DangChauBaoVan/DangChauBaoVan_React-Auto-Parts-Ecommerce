import React from "react";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";

function TopBar() {
  return (
    <div
      className="text-white text-xs w-full"
      style={{
        background:
          "linear-gradient(90deg, #0D57C6 0%, #37CFFF 50%, #0F5ED6 100%)",
      }}
    >
      <div
        className="flex justify-between items-center  h-6 px-[240px] py-[4px]"
      >
        {/* Bên trái */}
        <div className="flex items-center gap-1">
          <RiDiscountPercentFill />
          <p>
            Nhập mã <span className="font-bold text-yellow-300">NEWBIE</span>{" "}
            giảm ngay 10% cho lần đầu mua hàng
          </p>
        </div>

        {/* Bên phải */}
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <FaPhoneAlt />
            Hotline:{" "}
            <span className="font-bold text-yellow-300">0283 760 7607</span>
          </span>
          <span className="flex items-center gap-1">
            <FaMobile />

            <a href="#" className="hover:underline">
              Tải ứng dụng
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
