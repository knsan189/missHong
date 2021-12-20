import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Festival from "../../../pages/api/FestivalService";
import FestivalList from "../festival/FestivalList";
import Search from "./Search";
import useNotifier from "../../hooks/useNotifier";
import Loading from "../Loading";
import FestivalDetail from "../festival/FestivalDetail";

const Main = (props) => {
  useNotifier();
  const [festivals, setFestivals] = useState(null);

  const getFestivals = async () => {
    const result = await Festival.getThisMonthFestival(20211212, 1, "B");
    setFestivals(result);
  };

  const { loading } = useSelector((state) => state.festivals);

  useEffect(() => {
    getFestivals();
  }, []);

  return (
    <>
      <Loading open={loading} text="축제 불러오는중" />
      <Search />
      <FestivalList festivals={festivals} />
      <FestivalDetail />
    </>
  );
};

export default Main;
