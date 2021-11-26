import React from "react";
import PropTypes from "prop-types";
import { AppBar, Container, Toolbar } from "@mui/material";

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>Miss Hong Fesitval Tour</Container>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
