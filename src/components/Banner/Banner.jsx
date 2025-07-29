import pattern from "../../assets/img/pattern.png";
import banner_img_1 from "../../assets/img/banner_img_1.png";
import banner_img_2 from "../../assets/img/banner_img_2.png";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "./Banner.css"
import { products } from "../../data/product";
export default function Banner() {
  

  return (
    <div className="px-[240px] py-4">
      <div className="relative w-full h-[500px]  bg-[#0598fa] rounded-t-xl ">
        <img
          src={pattern}
          alt="pattern"
          className="w-full h-full absolute top-0 left-0 z-0 rounded-t-xl"
        />
        <div
          className="absolute top-10 left-0 px-[48px] py-[10px] rounded-r-full"
          style={{
            background: "linear-gradient(90deg, #FFF5CC 0%,  #FFD666 100%)",
          }}
        >
          <p className="uppercase text-xl font-bold text-[#7A0916]">
            Mới Cực Hot
          </p>
        </div>
        <div className="absolute top-1/4 left-10 ">
          <h2
            style={{
              WebkitTextStroke: "4px #0373f3",
            }}
            className="text-[70px] text-white font-extrabold leading-[100px] tracking-tighter
"
          >
            TẢI APP NHẬN QUÀ
          </h2>
          <div className="text-[#FFD666] text-[32px] font-medium ">
            <p>
              Tích điểm ngay trên app <span>SUNFIL1</span>
            </p>
            <p>*100K = 10 điểm</p>
          </div>
        </div>
        <div>
          <img
            src={banner_img_1}
            className="absolute bottom-0 right-10 z-10"
            alt="bn1"
          />
          <img
            src={banner_img_2}
            className="absolute bottom-0 right-0 z-0"
            alt="bn2"
          />
        </div>
      </div>
      <div>
        <div className="relative w-full py-6 bg-[#025FCA]">
          
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={5}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="!px-8 cursor-pointer"
          >
            {products.map((p, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  oldPrice={p.oldPrice}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom arrows */}
          <button className="swiper-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow p-2">
            
          </button>
          <button className="swiper-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-white rounded-full shadow p-2">
            
          </button>
        </div>
      </div>
    </div>
  );
}
