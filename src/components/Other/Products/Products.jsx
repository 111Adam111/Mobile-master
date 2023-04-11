const charger = require("../../../asset/charger1.png");
const headphones = require("../../../asset/headphones.png");
const phone = require("../../../asset/phone.png");
const products = [
  {
    id: 0,
    name: "jPhone 31 Pro",
    price: 199900,
    showPrice: 1999,
    desc: "New jPhone 31 Pro with 64GB memory, 50mp camera, 6.7-inch Super Retina XDR display, powerful A15 Bionic chip and 5G connectivity. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi animi, eos iste architecto veritatis suscipit eveniet earum distinctio accusamus consequatur.",
    colors: [
      { name: "white", obj: { b: 21, g: 20, r: 20 } }, //white
      { name: "gray", obj: { b: 0.015, g: 0.015, r: 0.015 } }, //gray
      { name: "blue", obj: { b: 0.6, g: 0.15, r: 0 } }, //light blue
      // { name: "dark green", obj: { b: 0, g: 0.012, r: 0 } }, // dark green
      { name: "creamy", obj: { b: 0, g: 0, r: 15 } }, // creamy
      { name: "red", obj: { b: 0, g: 0, r: 0.6 } }, // red
    ],
    img: phone,
    position: 0,
  },
  {
    id: 1,
    name: "X5 Bluetooth Headphones",
    price: 19900,
    showPrice: 199,
    desc: "The newest X5 Bluetooth headphones feature perfect sound quality and a long-lasting 2000 mAh battery. With a range of 15 meters, you can comfortably use them around your home.",
    img: headphones,
    colors: [
      { name: "white", obj: { b: 21, g: 20, r: 20 } }, //white
      { name: "navy", obj: { b: 0.09, g: 0.01, r: 0 } }, // red
    ],
    position: 15,
  },
  {
    id: 2,
    name: "Charger 30W",
    price: 1900,
    showPrice: 19,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut magnam et est asperiores mii fugit ullam in veniam expedita. Velit, eos laboriosam voluptas quae qui iste optio recusandae error blanditiis repudiandae illum quaerat fugiat quasi aut neque sequi sed iutum veniam nesciunt.",
    img: charger,
    colors: [
      { name: "white", obj: { b: 21, g: 20, r: 20 } }, //white
    ],
    position: 45,
  },
];

const getProductData = (id) => {
  let productData = products.find((product) => product.id === id);
  return productData;
};

export { getProductData, products };
