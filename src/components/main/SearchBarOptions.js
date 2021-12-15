import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

const SearchBarOptions = ({ optionProps, option }) => {
  return (
    <Grid container {...optionProps}>
      <Grid item>
        <Typography>
          {option.front_nomarlPart}
          <b>{option.highlight}</b>
          {option.back_nomarlPart}
        </Typography>
      </Grid>
    </Grid>
  );
};

SearchBarOptions.propTypes = {
  option: PropTypes.shape({
    front_nomarlPart: PropTypes.string,
    highlight: PropTypes.string,
    back_nomarlPart: PropTypes.string,
    memo: PropTypes.shape({
      contents: PropTypes.string,
    }),
  }).isRequired,
  optionProps: PropTypes.instanceOf(Object).isRequired,
};

export default SearchBarOptions;
