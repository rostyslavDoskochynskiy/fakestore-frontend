import * as React from "react";
import Link from "next/link";

import { IProduct } from "../../../context/product-context";
import { CartData } from "../../../context/cart-context";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

interface IProductTile {
  product: IProduct;
}

export default function ProductTile({ product }: IProductTile) {
  const cart = React.useContext(CartData);

  return (
    <Card sx={{ width: 280 }}>
      <Link href={`product/${product.id}`}>
        <CardMedia
          component="img"
          alt={product?.title}
          height="200"
          image={product?.image}
          sx={{
            objectFit: "contain",
            width: "90%",
            margin: "10px auto 0 auto",
          }}
        />
      </Link>
      <CardContent>
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
          {product?.title}
        </Typography>
      </CardContent>
      <Typography
        component="p"
        sx={{ padding: "0 16px", color: "#1976d2", fontSize: "22px" }}
      >
        $ {product?.price}
      </Typography>
      <CardActions>
        <Box
          onClick={() => cart?.addPurchasesValue(product)}
          sx={{
            cursor: "pointer",
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            endIcon={<ShoppingBasketIcon />}
            sx={{ display: "flex", alignItems: "center", width: "100%" }}
          >
            <Typography
              component="p"
              sx={{ color: "white", userSelect: "none" }}
            >
              Add to cart
            </Typography>
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
