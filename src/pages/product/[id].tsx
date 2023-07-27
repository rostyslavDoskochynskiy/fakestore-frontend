import { useRouter } from "next/router";
import { useContext } from "react";
import Head from "next/head";

import { IProduct, ProductsData } from "../../../context/product-context";
import { CartData, ICart } from "../../../context/cart-context";

import { Box, Button, CardMedia, Skeleton, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Page() {
  const productsContext = useContext(ProductsData);
  const cart = useContext(CartData);
  const router = useRouter();
  const selectedProduct = productsContext?.products?.find(
    (product: IProduct) => product?.id == Number(router.query.id)
  );

  const addToCart = () => {
    cart?.setPurchases((prev: any) => {
      if (
        prev?.find((obj: ICart) => obj?.product?.id === selectedProduct?.id)
      ) {
        const changedCart = prev.map((arr: ICart) => {
          if (arr?.product.id === selectedProduct?.id) {
            return { value: arr.value + 1, product: arr.product };
          }
          return arr;
        });

        return changedCart;
      }
      return [...prev, { value: 1, product: selectedProduct }];
    });
  };

  return (
    <>
      <Head>
        <title>{selectedProduct?.title}</title>
      </Head>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: {
            xs: "70px  auto 0 auto",
            sm: "100px  auto 0 auto",
            md: "150px  auto 0 auto",
          },
          minHeight: "63vh",
          position: "relative",
          padding: "0 16px",
        }}
      >
        {productsContext?.isLoading ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: "30px",
              justifyContent: "center",
            }}
          >
            <Skeleton variant="rectangular" width={400} height={300} />
            <Box sx={{ pt: 0.5, maxWidth: "400px", width: "100%" }}>
              <Skeleton height="70px" sx={{ margin: "10px 0" }} />
              <Skeleton height="70px" sx={{ margin: "10px 0" }} />
              <Skeleton width="40%" height="40px" />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Skeleton width="40%" height="40px" />
                <Skeleton width="40%" />
              </Box>
            </Box>
          </Box>
        ) : (
          <>
            <Box
              onClick={() => router.back()}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginLeft: { xs: "5px", lg: "0px" },
                marginBottom: { xs: "40px", lg: "0px" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<ArrowBackIcon sx={{ color: "#fff" }} />}
                sx={{ display: "flex", alignItems: "center", width: "100px" }}
              >
                <Typography
                  component="p"
                  sx={{ color: "white", userSelect: "none" }}
                >
                  Back
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "20px",
                justifyContent: "center",
                alignItems: { xs: "center", md: "start" },
              }}
            >
              <CardMedia
                component="img"
                alt={selectedProduct?.title}
                sx={{
                  maxWidth: "400px",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
                image={selectedProduct?.image}
              />
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h5"
                  sx={{
                    maxWidth: "400px",
                  }}
                >
                  {selectedProduct?.title}
                </Typography>
                <Typography
                  gutterBottom
                  component="p"
                  sx={{
                    maxWidth: "400px",
                    marginTop: "30px",
                  }}
                >
                  {selectedProduct?.description}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    gutterBottom
                    component="p"
                    sx={{
                      marginTop: "5px",
                    }}
                  >
                    Rate: {selectedProduct?.rating.rate}
                  </Typography>
                  <StarIcon />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    gutterBottom
                    component="p"
                    sx={{
                      marginTop: "5px",
                    }}
                  >
                    Price: {selectedProduct?.rating.count} $
                  </Typography>
                  <Box
                    onClick={() => addToCart()}
                    sx={{
                      cursor: "pointer",
                      marginLeft: "auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      endIcon={<ShoppingBasketIcon />}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{ color: "white", userSelect: "none" }}
                      >
                        Add to cart
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
