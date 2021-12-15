import React from "react";
import PropTypes from "prop-types";
import { Button, Divider, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import SidebarTitle from "../Sidebar/SidebarTitle";
import SidebarList from "../Sidebar/SidebarList";

const MapSidebar = ({ open, onToggle }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      variant="persistent"
      sx={{ width: 400 }}
      PaperProps={{ sx: { width: 400 } }}
    >
      <Box sx={{ marginTop: "64px" }}>
        <SidebarTitle />
        <Divider />
        <SidebarList />
      </Box>
    </Drawer>
  );
};

MapSidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MapSidebar;
