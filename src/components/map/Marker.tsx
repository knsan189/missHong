import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Avatar, Tooltip, Box, Fade, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { getFestivalDetailRequest } from "../../redux/reducers/festival";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  background: theme.palette.primary.light,
  maxWidth: 200,
  whiteSpace: "nowrap",
  padding: theme.spacing(0.5),
  boxShadow: theme.shadows[5],
  borderRadius: "100%",
  cursor: "pointer",
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

const Marker = ({ festival }) => {
  const { title, firstimage, firstimage2, contentid } = festival;
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(getFestivalDetailRequest(contentid));
  };

  const boxRef = useRef();

  useEffect(() => {
    window.maps?.OverlayView.preventMapHitsAndGesturesFrom(boxRef.current);
  }, []);

  return (
    <StyledBox onClick={onClick} ref={boxRef}>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        title={title}
        arrow
        placement="right"
      >
        <Avatar sx={{ width: 50, height: 50 }} alt={title} src={firstimage || firstimage2} />
      </Tooltip>
    </StyledBox>
  );
};

Marker.propTypes = {
  festival: PropTypes.shape({
    title: PropTypes.string,
    contentid: PropTypes.number,
    firstimage: PropTypes.string,
    firstimage2: PropTypes.string,
  }).isRequired,
};

export default React.memo(Marker);
