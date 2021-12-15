import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Box, Button, InputBase, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/styles";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();
  const onClickButton = () => {
    const { value } = inputRef.current;
    onSearch(value);
  };
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        width: 700,
        background: theme.palette.background.default,
      }}
    >
      <InputBase
        placeholder="Search Korea Festival"
        inputRef={inputRef}
        fullWidth
        sx={{ px: 1, py: 0.5 }}
      />
      <Button
        variant="contained"
        onClick={onClickButton}
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

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
