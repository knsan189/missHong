import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import { useSelector } from "react-redux";
import SidebarItem from "./SidebarItem";

const SidebarList = (props) => {
  const { festivals } = useSelector((state) => state.festivals);

  if (!festivals) return null;
  return (
    <List>
      {festivals.items.item.map((festival) => (
        <SidebarItem key={festival.contentid} festival={festival} />
      ))}
    </List>
  );
};

SidebarList.propTypes = {};

export default SidebarList;
