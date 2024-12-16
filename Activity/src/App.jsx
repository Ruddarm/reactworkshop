import React from "react";
import Header from "./Header";
import ProductCard from "./Productcard";
import DashBoard from "./DashBoard";
function App() {
  
  return (
    <>
      {/* Step one set header */}
      <Header Title={"Amazon"}></Header>
      <DashBoard products={[{},{}]}></DashBoard>
    </>
  );
}

export default App;
