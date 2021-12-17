import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/styles";
import { Button, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarInput = forwardRef(({ params, placeholder }, ref) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        width: "100%",
        background: theme.palette.background.default,
      }}
      ref={params.InputProps.ref}
    >
      <InputBase
        inputProps={{ ...params.inputProps }}
        inputRef={ref}
        placeholder={placeholder}
        fullWidth
        sx={{ px: 1, py: 0.5 }}
      />
      <Button
        variant="contained"
        sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          whiteSpace: "nowrap",
        }}
      >
        <SearchIcon />
      </Button>
    </Paper>
  );
});

SearchBarInput.propTypes = {
  params: PropTypes.instanceOf(Object).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchBarInput;
