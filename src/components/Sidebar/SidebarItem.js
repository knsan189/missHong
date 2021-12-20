import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { useDispatch } from "react-redux";
import { getFestivalDetailRequest } from "../../redux/reducers/festival";

const SidebarItem = ({ festival }) => {
  const {
    title,
    contentid,
    firstimage,
    firstimage2,
    addr1,
    eventenddate,
    eventstartdate,
  } = festival;

  const dispatch = useDispatch();
  const theme = useTheme();
  const onClick = () => {
    dispatch(getFestivalDetailRequest(contentid));
  };

  return (
    <ListItem button divider onClick={onClick}>
      <ListItemAvatar sx={{ mr: 2 }}>
        <Avatar
          src={firstimage || firstimage2}
          variant="rounded"
          sx={{ width: 100, height: 100 }}
        />
      </ListItemAvatar>
      <ListItemText>
        <Typography variant="subtitle1" gutterBottom noWrap>
          {title}
        </Typography>
        <Typography
          variant="body2"
          noWrap
          sx={{ color: theme.palette.text.secondary }}
        >
          {addr1}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.secondary }}
        >
          {eventstartdate} ~ {eventenddate}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

SidebarItem.propTypes = {
  festival: PropTypes.shape({
    title: PropTypes.string,
    contentid: PropTypes.number,
    firstimage: PropTypes.string,
    firstimage2: PropTypes.string,
    addr1: PropTypes.string,
    eventenddate: PropTypes.number,
    eventstartdate: PropTypes.number,
  }).isRequired,
};

export default SidebarItem;
