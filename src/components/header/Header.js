import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

const Header = ({ position }) => {
  const theme = useTheme();
  return (
    <AppBar position={position} sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Container>
          <Link href="/" passHref>
            <Button sx={{ color: "inherit" }}>미스 홍 투어</Button>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  position: PropTypes.string,
};

Header.defaultProps = {
  position: "static",
};

export default Header;
