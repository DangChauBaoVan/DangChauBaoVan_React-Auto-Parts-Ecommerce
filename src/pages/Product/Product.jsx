import React, { useEffect } from "react";
import useProductFilters from "../../hooks/useFilteredProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import SortBar from "../../components/SortBar/SortBar";
import ProductFilterSidebar from "../../components/ProductFilterSidebar/ProducFilterSidebar";
import Loading from "../../components/Loading/Loading";

export default function ProductPage() {
  const {
    filters,
    setFilters,
    sortCategory,
    setSortCategory,
    sortPrice,
    setSortPrice,
    visibleProducts,
    loading,
    loadingMore,
    loadMore,
    hasNextPage,
  } = useProductFilters();

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        if (hasNextPage && !loadingMore) {
          loadMore();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, loadingMore, loadMore]);

  return (
    <div className="flex gap-6 px-[240px] py-6 bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <ProductFilterSidebar filters={filters} onFilterChange={setFilters} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Danh sách sản phẩm</h2>
          <SortBar
          sortCategory={sortCategory}
          setSortCategory={setSortCategory}
          sortPrice={sortPrice}
          setSortPrice={setSortPrice}
        />
        </div>

        {loading ? (
          <Loading/>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4">
              {visibleProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  oldPrice={p.oldPrice}
                />
              ))}
            </div>

            {loadingMore && (
              <div className="flex justify-center py-4">
                <Loading />
              </div>
            )}

            {!hasNextPage && !loadingMore && (
              <div className="text-center text-gray-400 py-4">
                Bạn đã xem hết sản phẩm
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
