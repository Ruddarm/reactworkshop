import React from 'react'

import Style from './AddProduct.module.css'
import ProductForm from './form';
function AddProduct({product,updater}){
    // console.log("udpater is ",product)
    return (
        <>
            <div className={Style.Container}>
                <ProductForm product= {product} updater={updater}></ProductForm>
            </div>
        </>
    )
}
export default AddProduct;