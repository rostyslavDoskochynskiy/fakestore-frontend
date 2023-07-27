import type { AppProps } from "next/app";
import React, { useState } from "react";

import ProductContext from "../../context/product-context";
import CartContext from "../../context/cart-context";

import Header from "@/components/header/header";
import ShopingCart from "@/components/shoping-cart/shoping-cart";
import Footer from "@/components/footer/footer";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [isShopingCart, setIsShopingCart] = useState(false);

  const Main = () => {
    return (
      <>
        <ShopingCart
          isShopingCart={isShopingCart}
          setIsShopingCart={setIsShopingCart}
        />
        <Header setIsShopingCart={setIsShopingCart} />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  };

  return (
    <>
      <ProductContext>
        <CartContext>
          <Main />
        </CartContext>
      </ProductContext>
    </>
  );
}
