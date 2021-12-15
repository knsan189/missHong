import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import FestivalService from "../../../pages/api/FestivalService";
import { setFestivals } from "../../redux/reducers/festival";

const Search = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { festivals } = useSelector((state) => state.festivals);
  const onSearch = async (text) => {
    const result = await FestivalService.searchKeyword(text, 0);
    dispatch(setFestivals(result));
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
