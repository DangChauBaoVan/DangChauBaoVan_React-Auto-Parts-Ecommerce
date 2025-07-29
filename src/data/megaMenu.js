import img1 from "../assets/img/danhmuc_locdau.png";
import img2 from "../assets/img/dm_lockhongkhi.png";
import img3 from "../assets/img/dm_locnhienlieu.png";
import img4 from "../assets/img/dm_loccabin.png";
import img5 from "../assets/img/dm_lockhongkhi2.png";
import img6 from "../assets/img/dm_loccabin2.png";
import img7 from "../assets/img/dm_locnhienlieu2.png";
import img8 from "../assets/img/dm_lockhongkhi3.png";

import product_1 from "../assets/img/product_1.png";
import product_2 from "../assets/img/product_2.png";
import product_3 from "../assets/img/product_3.png";
import product_4 from "../assets/img/product_4.png";
import product_5 from "../assets/img/product_5.png";

const categoryNames = [
  "Bộ Lọc Dầu",
  "Bộ Lọc Không Khí",
  "Bộ Lọc Nhiên Liệu",
  "Bộ Lọc Trong Cabin",
  "Bộ Lọc Không Khí",
  "Bộ Lọc Trong Cabin",
  "Bộ Lọc Nhiên Liệu",
  "Bộ Lọc Không Khí",
];

const categoryIcons = [img1, img2, img3, img4, img5, img6, img7, img8];

const subCategories = (icon) => [
  { id: 1, name: "Bộ lọc gió", icon },
  { id: 2, name: "Bộ lọc nhớt", icon },
  { id: 3, name: "Bộ lọc nhiên liệu", icon },
  { id: 4, name: "Bộ lọc điều hòa", icon },
  { id: 5, name: "Bộ lọc thủy lực", icon },
];

const hotProducts = () => [
  { id: 1, name: `Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)`, image: product_1, price: "299,000 đ" },
  { id: 2, name: `Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)`, image: product_2, price: "299,000 đ" },
  { id: 3, name: `Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)`, image: product_3, price: "299,000 đ" },
  { id: 4, name: `Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)`, image: product_4, price: "299,000 đ" },
  { id: 5, name: `Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)`, image: product_5, price: "299,000 đ" },
];

export const megaMenuData = categoryNames.map((name, index) => ({
  id: index + 1,
  name,
  icon: categoryIcons[index],
  subCategories: subCategories(categoryIcons[index]),
  hotProducts: hotProducts(index),
}));
