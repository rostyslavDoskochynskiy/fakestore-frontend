import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { IProduct } from "../../../context/product-context";

interface ICartTile {
  product: IProduct;
  value: number;
  addPurchasesValue: (product: IProduct) => void;
  subtractPurchasesValue: (id: number) => void;
  removePurchase: (id: number) => void;
}

export default function CartTile({
  product,
  value,
  addPurchasesValue,
  subtractPurchasesValue,
  removePurchase,
}: ICartTile) {
  return (
    <Card
      sx={{
        maxWidth: {
          xs: "280px",
          sm: "380px",
          md: "none",
        },
      }}
    >
      <CardMedia
        component="img"
        alt={product.title}
        height="220"
        width="40"
        image={product.image}
        sx={{ objectFit: "contain", width: "90%", margin: "0 auto" }}
      />
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
          {product.title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography component="p">Price: {product.price} $</Typography>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <IconButton
            onClick={() => addPurchasesValue(product)}
            aria-label="delete"
            size="small"
          >
            <AddIcon />
          </IconButton>

          <Typography component="p">{value}</Typography>
          <IconButton
            onClick={() => subtractPurchasesValue(product.id)}
            aria-label="delete"
            size="small"
          >
            <RemoveIcon />
          </IconButton>
        </Box>
        <IconButton
          onClick={() => removePurchase(product.id)}
          aria-label="delete"
          size="small"
        >
          <DeleteOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
