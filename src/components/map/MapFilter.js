import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Card, Paper } from "@mui/material";
import SearchBar from "../main/SearchBar";
import FestivalService from "../../../pages/api/FestivalService";
import { enqueueSnackbar } from "../../redux/reducers/snackbar";
import { setFestivals } from "../../redux/reducers/festival";
import { getPlacesCenterZoom, moveMapPosition } from "../../utils/GeoUtil";
import Snackbar from "../Snackbar";

const MapFilter = (props) => {
  const dispatch = useDispatch();
  const onSearch = useCallback(
    async (code) => {
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
      const { newCenter, newZoom } = getPlacesCenterZoom(result.items.item);
      moveMapPosition(newCenter, newZoom);
    },
    [dispatch]
  );
  return (
    <Card sx={{ position: "absolute", top: 24, left: 8, width: 300, p: 1 }}>
      <SearchBar onSearch={onSearch} placeholder="검색" />
    </Card>
  );
};

MapFilter.propTypes = {};

export default MapFilter;
