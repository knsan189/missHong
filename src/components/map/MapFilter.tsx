import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  Card,
  Divider,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
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

  const [expanded, setExpaneded] = useState(false);

  const onChange = () => {
    setExpaneded(!expanded);
  };

  return (
    <Card sx={{ position: "absolute", top: 24, left: 24, width: 300 }}>
      <CardContent>
        <SearchBar onSearch={onSearch} placeholder="검색" />
      </CardContent>
      <Accordion expanded={expanded} onChange={onChange} disableGutters>
        <AccordionSummary>
          <Button variant="contained">필터</Button>
        </AccordionSummary>
        <AccordionDetails>b</AccordionDetails>
      </Accordion>
    </Card>
  );
};

MapFilter.propTypes = {};

export default MapFilter;
