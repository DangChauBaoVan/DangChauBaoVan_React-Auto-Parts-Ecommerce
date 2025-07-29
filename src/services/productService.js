import { products } from "../data/product";

// Service lấy danh sách sản phẩm (mô phỏng API)
export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products); // trả về data local
    }, 1000); // delay 1s giả lập API
  });
};
