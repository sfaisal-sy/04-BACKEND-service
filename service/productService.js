import Product from "../model/productModel.js";

export const createProductService = async (productData) => {
     const porduct = await Product.create(productData);

    return porduct;
}


// EXPORT TO CONTROLER