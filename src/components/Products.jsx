const charger = require('../asset/charger1.png')
const headphones = require('../asset/headphones.png')
const phone = require('../asset/phone.png')
const products = [
  {
    id: 0,
    name: "jPhone 31 Max Pro",
    price: 199900,
    showPrice: 1999,
    desc: "The iPhone 13 Pro Max is a top-of-the-line smartphone that offers exceptional performance, advanced features, and unparalleled camera capabilities. As a reseller, it's an excellent product to offer to your customers who demand the latest and greatest technology. With its stunning 6.7-inch Super Retina XDR display, powerful A15 Bionic chip, 5G connectivity, and Pro-level camera system, the iPhone 13 Pro Max is a must-have device for anyone who values quality and performance. Plus, its sleek and stylish design makes it a highly desirable device that's sure to impress your customers. Overall, the iPhone 13 Pro Max is an outstanding purchase that's sure to exceed your customers' expectations.",
    colors: [
      { name: "white", obj: { b: 21, g: 20, r: 20 } }, //white
      { name: "gray", obj: { b: 0.002, g: 0.002, r: 0.002 } }, //gray
      { name: "light blue", obj: { b: 0.2, g: 0.1, r: 0 } }, //light blue
      // { name: "dark green", obj: { b: 0, g: 0.012, r: 0 } }, // dark green
      { name: "creamy", obj: { b: 0, g: 0, r: 2 } }, // creamy
      { name: "red", obj: { b: 0, g: 0, r: 0.1 } }, // red
    ],
    img: phone,
    position: 0,
  },
  {
    id: 1,
    name: "Headphones",
    price: 19900,
    showPrice: 199,
    img: headphones,
    colors: [
      { name: "white", obj: { b: 21, g: 20, r: 20 } }, //white
      { name: "red", obj: { b: 0, g: 0, r: 0.1 } }, // red
    ],
    position: 15,
  },
  {
    id: 2,
    name: "Charger",
    price: 1900,
    showPrice: 19,
    img: charger,
    colors: [
      { name: "white", obj: { b: 21, g: 20, r: 20 } }, //white
    ],
    position: 45,

  },
];




// export const Images = [ 
//   {
//     image: charger
//   }
// ]


const getProductData = (id) => {
  let productData = products.find((product) => product.id === id);
  return productData;
};

export { getProductData, products };
