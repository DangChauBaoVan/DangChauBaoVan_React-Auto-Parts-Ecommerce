
import { useState, useEffect, useMemo } from "react";
import { fetchProducts } from "../services/productService";

export default function useProductFilters(initialData = []) {
  const [allProducts, setAllProducts] = useState(initialData);
  const [visibleCount, setVisibleCount] = useState(16);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: "",
    brands: [],
    year: [],
    origin: [],
  });

  // Sort mặc định
  const [sortCategory, setSortCategory] = useState("Liên quan");
  const [sortPrice, setSortPrice] = useState("Giá thấp → cao");

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Lấy dữ liệu (sau này thay API thật chỉ đổi fetchProducts)
  useEffect(() => {
    setLoading(true);
    fetchProducts().then((data) => {
      setAllProducts(data);
      setLoading(false);
    });
  }, []);

  // Lọc sản phẩm
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (filters.categories.length > 0) {
        const match = filters.categories.some((cat) =>
          product.name.toLowerCase().includes(cat.toLowerCase())
        );
        if (!match) return false;
      }

      if (filters.priceRange) {
        const price = parseInt(product.price.replace(/\./g, ""));
        if (filters.priceRange === "Dưới 100,000 đ" && price >= 100000) return false;
        if (
          filters.priceRange === "100,000 đ - 300,000 đ" &&
          (price < 100000 || price > 300000)
        )
          return false;
        if (
          filters.priceRange === "300,000 đ - 500,000 đ" &&
          (price < 300000 || price > 500000)
        )
          return false;
        if (filters.priceRange === "Trên 500,000 đ" && price <= 500000) return false;
      }

      if (filters.brands.length > 0) {
        const match = filters.brands.some((brand) =>
          product.name.toLowerCase().includes(brand.toLowerCase())
        );
        if (!match) return false;
      }

      if (filters.year.length > 0) {
        const match = filters.year.some((y) => product.year === y);
        if (!match) return false;
      }

      if (filters.origin.length > 0) {
        const match = filters.origin.some((o) =>
          product.origin?.toLowerCase().includes(o.toLowerCase())
        );
        if (!match) return false;
      }

      return true;
    });
  }, [allProducts, filters]);

  // Sort sản phẩm
  const filteredAndSortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    // Sort theo giá
    if (sortPrice === "Giá thấp → cao") {
      sorted.sort(
        (a, b) =>
          parseInt(a.price.replace(/\./g, "")) -
          parseInt(b.price.replace(/\./g, ""))
      );
    } else if (sortPrice === "Giá cao → thấp") {
      sorted.sort(
        (a, b) =>
          parseInt(b.price.replace(/\./g, "")) -
          parseInt(a.price.replace(/\./g, ""))
      );
    }

    // Sort theo category (giả sử có thêm thuộc tính sold, dateAdded, featured)
    if (sortCategory === "Bán chạy") {
      sorted.sort((a, b) => (b.sold || 0) - (a.sold || 0));
    } else if (sortCategory === "Mới nhất") {
      sorted.sort(
        (a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0)
      );
    } else if (sortCategory === "Nổi bật") {
      sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return sorted;
  }, [filteredProducts, sortPrice, sortCategory]);

  // Sản phẩm hiển thị
  const visibleProducts = useMemo(() => {
    return filteredAndSortedProducts.slice(0, visibleCount);
  }, [filteredAndSortedProducts, visibleCount]);

  // Load thêm dữ liệu
  const loadMore = () => {
    if (visibleCount >= filteredAndSortedProducts.length) return; // hết sản phẩm

    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + 16, filteredAndSortedProducts.length)
      );
      setLoadingMore(false);
    }, 1000);
  };

  return {
    filters,
    setFilters,
    sortCategory,
    setSortCategory,
    sortPrice,
    setSortPrice,
    visibleProducts,
    filteredAndSortedProducts,
    loading,
    loadingMore,
    loadMore,
    hasNextPage: visibleCount < filteredAndSortedProducts.length,
  };
}

