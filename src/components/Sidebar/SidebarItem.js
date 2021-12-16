import React from "react";
import PropTypes from "prop-types";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const SidebarItem = ({ festival }) => {
  const { title, contentid, firstimage, firstimage2, addr1 } = festival;
  return (
    <ListItem button divider>
      <ListItemAvatar>
        <Avatar
          src={firstimage || firstimage2}
          variant="rounded"
          sx={{ width: 50, height: 50 }}
        />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={addr1} />
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
  }).isRequired,
};

export default SidebarItem;
