import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import filter_icon from "../../assets/img/filter_icon.png";

const filterData = [
  {
    title: "Danh mục sản phẩm",
    key: "categories",
    options: [
      "Lọc gió Động cơ - Air Filter",
      "Lọc Nhiên Liệu - Fuel Filter",
      "Bộ lọc dầu",
      "Chưa phân loại",
      "Khác",
    ],
  },
  {
    title: "Khoảng giá",
    key: "priceRange",
    options: [
      "Dưới 100,000 đ",
      "100,000 đ - 300,000 đ",
      "300,000 đ - 500,000 đ",
      "Trên 500,000 đ",
    ],
  },
  {
    title: "Thương hiệu",
    key: "brands",
    options: ["Asakashi", "Bosch", "Hyundai"],
  },
  {
    title: "Năm sản xuất",
    key: "year",
    options: ["2021", "2020", "2019", "2018"],
  },
  {
    title: "Xuất xứ",
    key: "origin",
    options: ["Đức", "Nhật Bản", "Trung Quốc"],
  },
];

export default function ProductFilterSidebar({ onFilterChange }) {
  const [expanded, setExpanded] = useState(
    filterData.reduce((acc, _, idx) => ({ ...acc, [idx]: true }), {})
  );

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    priceRange: "",
    brands: [],
    year: [],
    origin: [],
  });

  const toggle = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleSelect = (group, option) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (group.key === "priceRange") {
        // Chọn duy nhất 1 khoảng giá
        newFilters.priceRange = prev.priceRange === option ? "" : option;
      } else {
        // Chọn nhiều cho các nhóm khác
        if (newFilters[group.key].includes(option)) {
          newFilters[group.key] = newFilters[group.key].filter((item) => item !== option);
        } else {
          newFilters[group.key] = [...newFilters[group.key], option];
        }
      }
      onFilterChange?.(newFilters); // báo về ProductPage
      return newFilters;
    });
  };

  return (
    <aside className="w-64 bg-white shadow rounded-md self-start">
      <div className="flex items-center gap-2 my-2 px-4 pb-2 text-lg font-semibold border-b border-[#919EAB]/20">
        <img src={filter_icon} alt="filter" />
        <p className="text-[#0373f3]">Bộ lọc</p>
      </div>

      {filterData.map((group, idx) => (
        <div
          key={idx}
          className={`py-2 ${
            idx !== filterData.length - 1 ? "border-b border-[#919EAB]/20" : ""
          }`}
        >
          <button
            onClick={() => toggle(idx)}
            className="w-full flex justify-between items-center font-semibold text-[#1C252E] px-4"
          >
            {group.title}
            <FiChevronDown
              size={24}
              className={`transition-transform ${expanded[idx] ? "rotate-180" : ""}`}
            />
          </button>

          {expanded[idx] && (
            <div className="mt-2 space-y-2 px-4">
              {group.key === "priceRange" ? (
                <div className="flex flex-col gap-2">
                  {group.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(group, opt)}
                      className={`w-full px-3 py-1 rounded-lg border border-[#919EAB]/20 text-sm transition ${
                        selectedFilters.priceRange === opt
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-white hover:bg-blue-200"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                group.options.map((opt, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters[group.key].includes(opt)}
                      onChange={() => handleSelect(group, opt)}
                      className="w-4 h-4 rounded appearance-none border border-gray-300 bg-white
                        checked:bg-blue-500 checked:border-blue-500
                        checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNi43IDUuM2ExIDEgMCAwIDEgMCAxLjRsLTcuNSA3LjVhMSAxIDAgMCAxLTEuNCAwbC0zLjUtMy41YTEgMSAwIDEgMSAxLjQtMS40TDguNSAxMmw2LjgtNi44YTEgMSAwIDAgMSAxLjQgMHoiLz48L3N2Zz4=')]
                        checked:bg-center checked:bg-no-repeat"
                    />
                    {opt} <span>(24)</span>
                  </label>
                ))
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
