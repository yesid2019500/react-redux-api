import React, { useEffect, useCallback, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage =  () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  
  const fetchProducts = async () => {

    try {

      const APi = await fetch(`https://fakestoreapi.com/products`)
      const response = await APi.json();
      dispatch(setProducts(response))
    } catch (error) {
        console.log(error ,"error")
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
