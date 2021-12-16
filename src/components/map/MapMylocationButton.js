import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/styles";
import { MyLocation } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentLocationRequest,
  removeCurrentLocation,
} from "../../redux/reducers/user";

const MapMylocationButton = () => {
  const theme = useTheme();
  const { currentLocation } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClick = () => {
    if (!currentLocation) {
      dispatch(getCurrentLocationRequest());
    } else {
      dispatch(removeCurrentLocation());
    }
  };

  return (
    <Button
      sx={{
        position: "absolute",
        color: currentLocation
          ? theme.palette.primary.light
          : theme.palette.text.secondary,
        background: theme.palette.background.default,
        minWidth: "auto",
        width: 42,
        height: 42,
        top: 80,
        right: 8,
        "&:hover": {
          color: theme.palette.primary.contrastText,
        },
      }}
      variant="contained"
      onClick={onClick}
    >
      <MyLocation />
    </Button>
  );
};

export default MapMylocationButton;
