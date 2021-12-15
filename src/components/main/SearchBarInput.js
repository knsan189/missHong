import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { Button, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarInput = ({ params }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        width: 700,
        background: theme.palette.background.default,
      }}
      ref={params.InputProps.ref}
    >
      <InputBase
        inputProps={{ ...params.inputProps }}
        placeholder="Search Korea Festival"
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
};

SearchBarInput.propTypes = {
  params: PropTypes.instanceOf(Object).isRequired,
};

export default SearchBarInput;
