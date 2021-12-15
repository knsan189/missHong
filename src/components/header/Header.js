import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = ({ position }) => {
  return (
    <AppBar position={position}>
      <Toolbar>
        <Container>
          <Link href="/" passHref>
            <Typography>Miss Hong Fesitval Tour</Typography>
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
