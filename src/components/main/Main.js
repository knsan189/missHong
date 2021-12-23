import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import FestivalList from "../festival/FestivalList";
import Search from "./Search";
import useNotifier from "../../hooks/useNotifier";
import Loading from "../Loading";
import FestivalDetail from "../festival/FestivalDetail";

const Main = ({ festivals }) => {
  useNotifier();
  const { loading } = useSelector((state) => state.festivals);

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

Main.propTypes = {
  festivals: PropTypes.instanceOf(Object).isRequired,
};
