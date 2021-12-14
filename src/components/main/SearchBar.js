import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();
  const onClickButton = () => {
    const { value } = inputRef.current;
    onSearch(value);
  };
  return (
    <Box>
      <TextField
        size="small"
        placeholder="Search Korea Festival"
        inputRef={inputRef}
      />
      <Button variant="contained" onClick={onClickButton}>
        Search
      </Button>
    </Box>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
