import product_1 from "../assets/img/product_1.png";
import product_2 from "../assets/img/product_2.png";
import product_3 from "../assets/img/product_3.png";
import product_4 from "../assets/img/product_4.png";
import product_5 from "../assets/img/product_5.png";

export const baseProducts = [
  {
    id: 1,
    image: product_1,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "150.000",
    oldPrice: "200.000",
    year: "2019",
    origin: "Đức",
  },
  {
    id: 2,
    image: product_2,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "95.000",
    oldPrice: "120.000",
    year: "2021",
    origin: "Nhật Bản",
  },
  {
    id: 3,
    image: product_3,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "220.000",
    oldPrice: "260.000",
    year: "2019",
    origin: "Trung Quốc",
  },
  {
    id: 4,
    image: product_4,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "300.000",
    oldPrice: "350.000",
    year: "2018",
    origin: "Đức",
  },
  {
    id: 5,
    image: product_5,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "175.000",
    oldPrice: "210.000",
    year: "2020",
    origin: "Nhật Bản",
  },
  {
    id: 6,
    image: product_5,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "175.000",
    oldPrice: "210.000",
    year: "2021",
    origin: "Trung Quốc",
  },
];
export const products = Array.from({ length: 100 }, (_, index) => {
  const base = baseProducts[index % baseProducts.length];
  return {
    ...base,
    id: index + 1, 
  };
});
