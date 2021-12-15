import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import Festival from "../../../pages/api/FestivalService";
import FestivalList from "../festival/FestivalList";
import Search from "./Search";
import useNotifier from "../../hooks/useNotifier";

const Main = (props) => {
  useNotifier();
  const [festivals, setFestivals] = useState(null);

  const getFestivals = async () => {
    const result = await Festival.getThisMonthFestival(20211212, 1, "B");
    setFestivals(result);
  };
  useEffect(() => {
    getFestivals();
  }, []);

  return (
    <>
      <Search />
      <FestivalList festivals={festivals} />
    </>
  );
};

Main.propTypes = {};

export default Main;
