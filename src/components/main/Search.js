import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import { searchFestivalRequest } from "../../redux/reducers/festival";

const Search = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onSearch = async (text) => {
    dispatch(searchFestivalRequest(text, 0));
    router.push("/map");
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <SearchBar onSearch={onSearch} />
    </Box>
  );
};

Search.propTypes = {};

export default Search;
