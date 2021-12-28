import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Button, Divider, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import SidebarTitle from "../Sidebar/SidebarTitle";
import SidebarList from "../Sidebar/SidebarList";
import SidebarDetail from "../Sidebar/SidebarDetail";

const MapSidebar = ({ open, onToggle, onClearList }) => {
  const paperRef = useRef();
  const onClick = async (event) => {
    console.log(paperRef.current.scrollHeight);
    await onClearList();
    console.log(paperRef.current.scrollHeight);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      variant="persistent"
      sx={{ width: 400 }}
      PaperProps={{ sx: { width: 400 }, ref: paperRef }}
    >
      <Box sx={{ marginTop: "64px" }}>
        <SidebarDetail />
        <Button onClick={onClick}>test</Button>
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
  onClearList: PropTypes.func.isRequired,
};

export default MapSidebar;
