import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";

import { IProduct, ProductsData } from "../../context/product-context";

import ProductTile from "@/components/product-tile/product-tile";
import ControlledAccordions from "@/components/accordion/accordion";
import { Box, Button, Skeleton, Typography } from "@mui/material";

function Home() {
  const productsContext = useContext(ProductsData);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div className="home__hero-wrapper">
          <Box
            sx={{
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: {
                xs: "15px",
                md: "30px",
              },
              borderRadius: "15px",
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: {
                  xs: "22px",
                  md: "40px",
                },
              }}
            >
              Start shoping with us
            </Typography>
          </Box>
        </div>
        <Typography variant="h3" component="h3" sx={{ marginTop: "30px" }}>
          Best sellers
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            maxWidth: "1200px",
            margin: "0 auto",
            justifyContent: "center",
            marginTop: "50px",
            padding: "0 16px",
          }}
        >
          {productsContext?.isLoading
            ? Array(8)
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
            : productsContext?.products
                ?.sort(
                  (a: IProduct, b: IProduct) => b.rating.rate - a.rating.rate
                )
                .slice(1)
                .slice(-4)
                .map((product: IProduct) => (
                  <ProductTile key={product.id} product={product} />
                ))}
        </Box>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            marginTop: "50px",
            marginBottom: "20px",
            textAlign: "center",
            padding: "0 16px",
          }}
        >
          The best time to buy is now!
        </Typography>
        <Typography
          component="p"
          sx={{
            maxWidth: "400px",
            margin: "0 auto 40px",
            padding: "0 16px",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          veniam sed, quidem autem nulla natus.
        </Typography>
        <Link href="/products">
          <Button variant="contained" disableElevation>
            Start Your Shoping Now!
          </Button>
        </Link>
        <Box sx={{ margin: "50px 0", padding: "0 16px" }}>
          <ControlledAccordions />
        </Box>
      </Box>
    </>
  );
}
export default Home;
