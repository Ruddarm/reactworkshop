import Style from "./Products.module.css";
import Productcard from "./Productcard";
function Product({ Products }) {
  // console.log("product inside product.jsx,",Products)
  return (
    <>
      <div className={Style.ProductContainer}>
        <div id={Style.todayDeal}>
          <h2>Today's Deal</h2>
        </div>
        <div id={Style.divcontainer}>
          {Products.map((pro, index) => {
            return <Productcard key={index} product={pro}></Productcard>;
          })}
        </div>
      </div>
    </>
  );
}
export default Product;
