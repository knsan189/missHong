import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Festival from "../../pages/api/Festival";
import FestivalList from "./festival/FestivalList";

const Main = (props) => {
  const [festival, setFestival] = useState(null);

  const getFestival = async () => {
    const result = await Festival.getThisMonthFestival(20211212, 1, "B");
    setFestival(result);
  };
  useEffect(() => {
    getFestival();
  }, []);

  return (
    <>
      <div />
      <FestivalList festival={festival} />
    </>
  );
};

Main.propTypes = {};

export default Main;
