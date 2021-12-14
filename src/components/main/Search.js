import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import FestivalService from "../../../pages/api/FestivalService";

const Search = (props) => {
  const onSearch = async (text) => {
    const result = await FestivalService.searchKeyword(text, 0);
    console.log(result);
  };
  return (
    <Box sx={{ height: "100vh" }}>
      <SearchBar onSearch={onSearch} />
    </Box>
  );
};

Search.propTypes = {};

export default Search;
