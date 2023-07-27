import { Dispatch, SetStateAction, useContext } from "react";

import { CartData } from "../../../context/cart-context";
import CartTile from "../cartTile/cart-tile";

import { Box, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

interface IShopingCart {
  isShopingCart: boolean;
  setIsShopingCart: Dispatch<SetStateAction<boolean>>;
}

export default function ShopingCart({
  isShopingCart,
  setIsShopingCart,
}: IShopingCart) {
  const cart = useContext(CartData);

  const totalSum =
    Math.round(
      cart?.purchases.reduce(
        (accumulator: any, currentValue: any) =>
          currentValue.product.price * currentValue.value + accumulator,
        0
      ) / 10
    ) * 10;

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: "10000",
        top: "0px",
      }}
      className={`site__cart-wrapper ${
        !isShopingCart ? "site__cart-active" : ""
      }`}
    >
      <Box
        onClick={() => setIsShopingCart(false)}
        sx={{
          display: isShopingCart ? "block" : "none",
          position: "fixed",
          zIndex: "100",
          width: "100vw",
          height: "100vh",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: "0",
          top: "0px",
          width: {
            xs: "300px",
            sm: "400px",
            md: "500px",
          },
          background: "#fff",
          height: "100vh",
          marginLeft: "auto",
          zIndex: "100",
          overflow: "auto",
        }}
        className={`site__cart ${
          !isShopingCart ? "site__cart-hide" : "site__cart-show"
        }`}
      >
        <IconButton
          onClick={() => setIsShopingCart(false)}
          sx={{
            position: "absolute",
            top: { xs: "10px", md: "20px" },
            right: { xs: "10px", md: "20px" },
            zIndex: "100",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            display: cart?.purchases.length === 0 ? "none" : "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
            padding: {
              xs: "20px 0px 0 16px",
              md: "20px 70px 0 16px",
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              fontSize: {
                xs: "16px",
                md: "22px",
              },
              margin: "0px",
            }}
          >
            Total sum: {totalSum} $
          </Typography>
          <Button
            variant="contained"
            endIcon={<ShoppingBasketIcon />}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              gutterBottom
              sx={{
                fontSize: {
                  xs: "12px",
                  md: "18px",
                },
                margin: "0px",
              }}
            >
              Buy now
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            gap: "16px",
            padding: "20px 20px 16px",
          }}
        >
          {cart?.purchases.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginTop: "100px",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  overflow: "hidden",
                  maxHeight: "200px",
                  height: "100%",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Your cart is Empty
              </Typography>

              <ProductionQuantityLimitsIcon />
            </Box>
          ) : (
            cart?.purchases
              .sort(
                (a: any, b: any) =>
                  b.product.rating.rate - a.product.rating.rate
              )
              .map((product: any) => (
                <CartTile
                  key={product.product.id}
                  product={product.product}
                  value={product.value}
                  addPurchasesValue={cart.addPurchasesValue}
                  subtractPurchasesValue={cart.subtractPurchasesValue}
                  removePurchase={cart.removePurchase}
                />
              ))
          )}
        </Box>
      </Box>
    </Box>
  );
}
