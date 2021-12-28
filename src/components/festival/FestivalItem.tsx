import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getFestivalDetailRequest } from "../../redux/reducers/festival";

const FestivalItem = ({ festival }) => {
  const { addr1, contentid, firstimage, firstimage2, title } = festival;
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(getFestivalDetailRequest(contentid));
  };
  return (
    <Card sx={{ width: 250 }}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="200"
          image={firstimage || firstimage2 || "./images/noimage.png"}
        />
        <CardContent>
          <Typography variant="subtitle1" noWrap>
            {title}
          </Typography>
          <Typography variant="caption" noWrap>
            {addr1}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

FestivalItem.propTypes = {
  festival: PropTypes.shape({
    addr1: PropTypes.string,
    contentid: PropTypes.number,
    firstimage: PropTypes.string,
    firstimage2: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default FestivalItem;
