import { PureComponent } from "react";
import Style from "./ProductCard.module.css";
function ProductCard({product}) {
  console.log("PRO IS ",product)
  return (
    <>
      <div className={Style.productcard}>
        <h2 className={Style.producttitle}>{product.title}</h2>
        <ul className={Style.productdescription}>
          {product.description.map((desc,index)=><li>{desc}</li>)}
        </ul>
        <p className={Style.price}>
          <span className={Style.oldprice}>{product.oldPrice}</span>
          <span className={Style.newprice}>{product.newPrice}</span>
        </p>
      </div>
    </>
  );
}

export default ProductCard;