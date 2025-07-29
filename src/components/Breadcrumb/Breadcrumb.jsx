import { FiChevronRight } from "react-icons/fi";

export default function Breadcrumb() {
  const crumbs = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/san-pham" },
  ];

  return (
    <nav className="bg-gray-100 py-3 px-[240px]" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            <a
              
              className={`hover:text-primary ${index === crumbs.length - 1 ? "text-[#024897] font-medium" : ""}`}
            >
              {crumb.name}
            </a>
            {index < crumbs.length - 1 && (
              <FiChevronRight className="mx-2 text-gray-400" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
