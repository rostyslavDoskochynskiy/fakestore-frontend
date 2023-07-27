import { useContext, useState } from "react";
import Head from "next/head";

import { IProduct, ProductsData } from "../../context/product-context";

import ProductTile from "@/components/product-tile/product-tile";
import { Box, Skeleton } from "@mui/material";
import SelectSort from "@/components/select/select";

function Product() {
  const productsContext = useContext(ProductsData);
  const [sortBy, setSortBy] = useState("");

  const sortedProducts = () => {
    if (sortBy === "name") {
      return productsContext?.products.sort((a: IProduct, b: IProduct) =>
        a.title.localeCompare(b.title)
      );
    }
    if (sortBy === "rating") {
      return productsContext?.products.sort(
        (a: IProduct, b: IProduct) => b.rating.rate - a.rating.rate
      );
    }
    if (sortBy === "price") {
      return productsContext?.products.sort(
        (a: IProduct, b: IProduct) => b.price - a.price
      );
    }
    return productsContext?.products;
  };

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div>
        <Box
          sx={{
            maxWidth: "1170px",
            margin: "0 auto",
            paddingLeft: {
              xs: "16px",
              lg: "0px",
            },
          }}
        >
          <SelectSort sortBy={sortBy} setSortBy={setSortBy} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            maxWidth: "1200px",
            margin: "0 auto",
            justifyContent: "center",
            marginTop: "20px",
            minHeight: "90vh",
          }}
        >
          {productsContext?.isLoading
            ? Array(4)
                .fill({})
                .map((e, i) => (
                  <Box key={i}>
                    <Skeleton variant="rectangular" width={280} height={540} />
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton height="40px" sx={{ margin: "10px 0" }} />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Skeleton width="40%" height="40px" />
                        <Skeleton width="40%" />
                      </Box>
                    </Box>
                  </Box>
                ))
            : sortedProducts()?.map((product: IProduct) => (
                <ProductTile key={product.id} product={product} />
              ))}
        </Box>
      </div>
    </>
  );
}
export default Product;
