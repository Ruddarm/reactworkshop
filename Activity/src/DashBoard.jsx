import Products from "./Products";
import Style from "./DashBoard.module.css";
import AddProduct from "./AddProduct";
import { useState } from "react";
function DashBoard() {
  const data = [
    {
      title: "Product 1",
      description: ["High quality", "Durable material", "Affordable price"],
      oldPrice: "$100",
      newPrice: "$75",
    },
    {
      title: "Product 2",
      description: ["Compact design", "Eco-friendly", "Best value"],
      oldPrice: "$150",
      newPrice: "$120",
    },
    {
      title: "Product 3",
      description: ["Lightweight", "Modern look", "High performance"],
      oldPrice: "$200",
      newPrice: "$180",
    },
    {
      title: "Product 4",
      description: ["Lightweight", "Modern look", "High performance"],
      oldPrice: "$200",
      newPrice: "$180",
    },
  ];
  const [productdata,setProduct] = useState(data);
  const updateProduct = (formdata) =>{
    console.log("from data", formdata);
    setProduct((prevProductData) => [...prevProductData, formdata]);
  }
  // console.log('on dashboard',productdata)
  return (
    <>
      <div className={Style.Container}>
        <Products Products={productdata}></Products>
        <AddProduct product={productdata} updater={updateProduct}></AddProduct>
      </div>
    </>
  );
}

export default DashBoard;
