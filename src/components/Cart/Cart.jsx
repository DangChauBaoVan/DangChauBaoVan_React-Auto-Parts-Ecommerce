import ProductCard from "../ProductCard/ProductCard";

export default function Cart({ items }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-72">
      <h3 className="font-bold mb-3">Giỏ hàng</h3>
      <div className="flex flex-col gap-4">
        {items.length === 0 ? (
          <p className="text-gray-500 text-sm">Chưa có sản phẩm nào</p>
        ) : (
          items.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              hotPrice={item.hotPrice ?? true}
              compact // thêm prop này để dùng layout nhỏ gọn
            />
          ))
        )}
      </div>
    </div>
  );
}
