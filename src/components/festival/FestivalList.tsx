import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import FestivalItem from "./FestivalItem";

const FestivalList = ({ festivals }) => {
  if (!festivals) return null;
  return (
    <Container>
      <Grid container spacing={3}>
        {festivals.items.item.map((festival) => (
          <Grid item key={festival.contentid} md={3}>
            <FestivalItem festival={festival} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

FestivalList.propTypes = {
  festivals: PropTypes.instanceOf(Object),
};

FestivalList.defaultProps = {
  festivals: null,
};

export default FestivalList;
