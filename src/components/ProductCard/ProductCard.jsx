import fire_icon from "../../assets/img/fire_icon.png";
function ProductCard({ image, name, price, oldPrice, hotPrice=true }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col w-full">
      {/* Hình ảnh + badge cố định */}
      <div className="relative w-full h-48 flex items-center justify-center overflow-hidden rounded-md">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Badge giá sốc */}
      {hotPrice && (
        <div className="flex justify-center  items-center px-4 py-1 rounded-full w-fit bg-linear-to-r from-[#FFD666] to-[#FFAB00]">
          <img src={fire_icon} alt="fire_icon" className="w-4 h-4" />
          <p className="ml-2 text-[#B71D18] font-bold text-[14px]">
            Giá cực sốc
          </p>
        </div>
      )}

      {/* Tên sản phẩm */}
      <h3 className="mt-3 text-xs font-medium line-clamp-2 min-h-[32px]">
        {name}
      </h3>

      {/* Giá */}
      <div className="mt-1">
        <p className="text-[#B71D18] font-bold text-[20px]">{price}₫</p>
        {oldPrice && (
          <>
            <span className="ml-2 text-gray-400 line-through text-xs">
              {oldPrice}₫
            </span>
            <span className="text-[#B71D18] text-xs ml-2 font-semibold">
              -10 %
            </span>
          </>
        )}
      </div>

      {/* Nút mua */}
      <button className="mt-2 bg-primary text-[#025FCA] text-sm font-bold bg-[#E6F1FF]  py-2 rounded-lg hover:bg-blue-200 transition">
        Mua ngay
      </button>
    </div>
  );
}

export default ProductCard;
