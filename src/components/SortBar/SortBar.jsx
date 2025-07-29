import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

export default function SortBar({ sortCategory, setSortCategory, sortPrice, setSortPrice }) {
  const [open, setOpen] = useState(false);

  const sorts = ["Liên quan", "Bán chạy", "Mới nhất", "Nổi bật"];
  const priceOptions = ["Giá thấp → cao", "Giá cao → thấp"];

  const handleSortClick = (item) => {
    setSortCategory(item);
  };

  const handlePriceClick = (option) => {
    setSortPrice(option);
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-between py-3 relative">
      {/* Sort theo loại */}
      <div className="flex items-center gap-3">
        <span className="text-gray-700 font-medium">Sắp xếp theo</span>
        {sorts.map((item) => (
          <button
            key={item}
            onClick={() => handleSortClick(item)}
            className={`relative px-5 py-2 rounded-lg text-sm font-bold border transition-all duration-200  
              ${sortCategory === item
                ? "border-blue-500 text-blue-500 bg-white shadow-sm rounded-tr-xl"
                : "border-gray-200 text-gray-700 bg-white hover:border-blue-300"
              }`}
          >
            {item}
            {sortCategory === item && (
              <span
                className="absolute top-0 right-0 w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-tr-lg rounded-bl-lg"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              >
                <FaCheck size={10} className="absolute top-1 right-0.5"/>
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Sort theo giá */}
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-1 cursor-pointer text-sm text-gray-700 ml-2 px-3 py-2 font-semibold rounded-md hover:border-blue-400"
        >
          {sortPrice}
          <FiChevronDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-[#919EAB]/20 z-10">
            {priceOptions.map((option) => (
              <div
                key={option}
                onClick={() => handlePriceClick(option)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  sortPrice === option ? "text-blue-500 font-semibold" : ""
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
