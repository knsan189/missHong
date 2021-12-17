import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/styles";
import SearchBar from "./SearchBar";
import FestivalService from "../../../pages/api/FestivalService";
import { setFestivals } from "../../redux/reducers/festival";
import { enqueueSnackbar } from "../../redux/reducers/snackbar";
import Snackbar from "../Snackbar";

const Search = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { festivals } = useSelector((state) => state.festivals);
  const onSearch = async (code) => {
    const result = await FestivalService.searchAreaCode(code, 1);
    if (result.totalCount === 0) {
      dispatch(
        enqueueSnackbar({
          message: "해당 지역의 축제가 없습니다",
          options: { variant: "warning", action: Snackbar },
        })
      );
      return;
    }
    dispatch(setFestivals(result));
    router.push("/map");
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        height: 460,
        backgroundImage: "url('./images/background2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBar
          onSearch={onSearch}
          placeholder="축제가 궁금한 지역을 검색해보세요"
        />
      </Container>
    </Box>
  );
};

Search.propTypes = {};

export default Search;
