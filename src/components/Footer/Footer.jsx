import freeship from "../../assets/img/icon_freeship.png";
import support from "../../assets/img/icon_support.png";
import package_icon from "../../assets/img/icon_package.png";
import delivery from "../../assets/img/icon_delivery.png";
import map from "../../assets/img/icon_map.png";
import { GoArrowRight } from "react-icons/go";
import bct from "../../assets/img/BCT.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-5">
      <div>
        {/* Top Info */}
        <div className="grid grid-cols-4 px-[240px] gap-6 mb-8">
          <div className="flex gap-3 items-center  justify-center bg-white rounded-lg p-4 shadow-md">
            <div>
              <img src={freeship} alt="Miễn phí vận chuyển" className="mt-3" />
            </div>

            <div>
              <h4 className="font-semibold py-2">Miễn phí vận chuyển</h4>
              <p className="text-sm text-gray-500">Với hoá đơn từ 1 triệu</p>
            </div>
          </div>
          <div className="flex gap-3  items-center justify-center bg-white rounded-lg p-4 shadow-md">
            <img src={support} alt="Hỗ trợ 24/7" className="mt-3" />
            <div>
              <h4 className="font-semibold">Hỗ trợ 24/7</h4>
              <p className="text-sm text-gray-500">
                Đội ngũ CSKH tận tình sẵn sàng lắng nghe
              </p>
            </div>
          </div>
          <div className="flex gap-3  items-center bg-white rounded-lg p-4 shadow-md">
            <img src={delivery} alt="Giao hàng nhanh 2h" className="mt-3" />
            <div>
              <h4 className="font-semibold">Giao hàng nhanh 2h</h4>
              <p className="text-sm text-gray-500">
                Trong bán kính 10km nội thành TP.HCM
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center bg-white rounded-lg p-4 shadow-md">
            <img src={package_icon} alt="30 ngày đổi trả" className="mt-3" />
            <div>
              <h4 className="font-semibold">30 ngày đổi trả</h4>
              <p className="text-sm text-gray-500">
                Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển
              </p>
            </div>
          </div>
        </div>

        {/* Store locator */}
        <div className="bg-[#E6F1FF] rounded-lg px-[240px] py-[32px] mb-8 flex justify-between items-center">
          <div className="flex items-center gap-3 text-2xl  font-semibold">
            <img src={map} className="w-10" alt="map" />
            <p className=" font-semibold">
              Xem hệ thống 88 cửa hàng trên toàn quốc
            </p>
          </div>
          <button className="flex items-center gap-2 px-[24px] py-[12px] bg-white text-[#025FCA] rounded-lg hover:bg-blue-200 transition font-semibold">
            <p>Xem ngay</p>
            <GoArrowRight size={24} />
          </button>
        </div>

        {/* Bottom Info */}
        <div className=" grid grid-cols-2 gap-2 text-sm text-[#637381] px-[240px] py-8  bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('/src/assets/img/footer_bg_pattern.jpg')] bg-cover bg-no-repeat bg-center">
          <div>
            <h3 className="font-bold text-[#013065] pb-4">
              VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
            </h3>
            <p>
              MST: <span className="font-semibold">0305094228</span>{" "}
            </p>
            <p>
              {" "}
              Địa chỉ:{" "}
              <span className="font-semibold">
                {" "}
                13 Nghĩa Thục, P.5, Q.5, TP.HCM
              </span>{" "}
            </p>
            <p>
              Điện thoại: <span className="font-semibold"> 0283 760 7607</span>{" "}
            </p>
            <p>
              {" "}
              Giờ mở cửa:
              <span className="font-semibold">
                {" "}
                09:00 - 22:00 từ Thứ 2 - Thứ 6
              </span>
            </p>
            <img src={bct} alt="Đã thông báo" className="mt-3 w-48" />
          </div>
          <div className="grid grid-cols-3 gap-6 ">
            <div>
              <h4 className="font-semibold text-xl text-[#013065] mb-2">
                Sitemap
              </h4>
              <ul className="space-y-3 pt-2">
                <li>About</li>
                <li>Article</li>
                <li>Cart</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl text-[#013065] mb-2">
                Legal
              </h4>
              <ul className="space-y-3 pt-2">
                <li className="font-bold">Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Delivery Policy</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl text-[#013065] mb-2">
                Download App
              </h4>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 bg-[#1C252E] p-3 rounded-lg shadow-md text-white">
                  <FaGooglePlay size={24} />
                  <div>
                    <p>Get It On</p>
                    <p className="font-semibold">Google Play Store</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#0373F3] p-3 rounded-lg shadow-md text-white">
                  <FaApple size={24} />
                  <div>
                    <p>Download from</p>
                    <p className="font-semibold">Apple App Store</p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-1 cursor-pointer font-bold text-xl"> 
                  <div className="flag-icon bg-[#D80027] rounded-full w-[36px] h-[36px] flex items-center justify-center">
                    <MdStar color="#FFDA44" size={18} />
                  </div>
                  <p className="font-[16px] font-weight-bold">VI</p>
                  <IoChevronDown  size={24}/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
