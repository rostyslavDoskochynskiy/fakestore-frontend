import * as React from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = ({}: any) => {
  return (
    <Box
      sx={{
        padding: { xs: "30px 40px", md: "10px 40px" },
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        backgroundColor: "#1976d2",
        marginTop: "50px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/" className="header__link">
        <AdbIcon sx={{ djisplay: "flex", mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="p"
          sx={{
            mr: 2,
            display: { md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
      </Link>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          margin: { xs: "20px 0", sm: "0px" },
        }}
      >
        <Link href="/" className="footer__link">
          Home
        </Link>
        <Link href="/products" className="footer__link">
          Products
        </Link>
      </Box>
      <Box>
        <Typography
          textAlign="center"
          sx={{
            textTransform: "capitalize",
            color: "#fff",
            marginBottom: { xs: "10px", md: "0px" },
          }}
        >
          Our social:
        </Typography>
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Link
            href="https://www.instagram.com/"
            className="header__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://uk-ua.facebook.com/"
            className="header__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://ua.linkedin.com/"
            className="header__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://twitter.com/"
            className="header__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
