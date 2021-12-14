import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import Festival from "../../../pages/api/FestivalService";
import FestivalList from "../festival/FestivalList";
import Search from "./Search";

const Main = (props) => {
  const [festivals, setFestivals] = useState(null);

  const getFestivals = async () => {
    const result = await Festival.getThisMonthFestival(20211212, 1, "B");
    setFestivals(result);
  };
  useEffect(() => {
    getFestivals();
  }, []);

  return (
    <Container>
      <Search />
      <FestivalList festivals={festivals} />
    </Container>
  );
};

Main.propTypes = {};

export default Main;
