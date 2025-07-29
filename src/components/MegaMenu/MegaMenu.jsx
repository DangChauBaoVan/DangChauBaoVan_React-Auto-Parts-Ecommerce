import { useState } from "react";
import { megaMenuData } from "../../data/megaMenu";
import ProductCard from "../ProductCard/ProductCard";

export default function MegaMenu({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState(megaMenuData[0]);

  if (!isOpen) return null;

  return (
    <div
      className="absolute  top-full w-[calc(100vw-480px)] bg-white shadow-lg border-t border-gray-200 z-50 px-2 py-2 rounded-b-lg"
      onMouseLeave={onClose}
    >
      <div className="flex py-4 bg-white rounded-b-lg">
        {/* Cột Category */}
        <div className="  border-gray-100 w-64">
          {megaMenuData.map((category) => (
            <div
              key={category.id}
              className={`flex items-center gap-3 pl-3 py-4 cursor-pointer hover:bg-[#F4F6F8] rounded-l-lg ${
                activeCategory.id === category.id
                  ? "bg-[#F4F6F8] text-blue-500 font-semibold"
                  : ""
              }`}
              onMouseEnter={() => setActiveCategory(category)}
            >
              <img
                src={category.icon}
                alt={category.name}
                className="w-6 h-6 object-contain"
              />
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#F4F6F8] w-full rounded-b-lg rounded-tr-lg">
          <div className="px-4 border-r border-gray-100">
            <div className="grid grid-cols-3 gap-2 pt-2 ">
              {activeCategory.subCategories.map((sub) => (
                <div
                  key={sub.id}
                  className="flex items-center gap-2 px-[16px] py-[16px] bg-white hover:text-blue-500 cursor-pointer  rounded-lg "
                >
                  <img
                    src={sub.icon}
                    alt={sub.name}
                    className="w-5 h-5 object-contain mr-2"
                  />
                  <span className="text-lg">{sub.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cột Hot Products */}
          <div className="px-4 py-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-700">Sản phẩm bán chạy</h3>
              <span className="text-sm text-blue-500 cursor-pointer hover:underline">
                Xem tất cả
              </span>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {activeCategory.hotProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  oldPrice={p.oldPrice}
                  hotPrice={false}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Cột Subcategory */}
      </div>
    </div>
  );
}
