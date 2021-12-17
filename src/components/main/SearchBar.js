import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Autocomplete, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/styles";
import SearchBarInput from "./SearchBarInput";
import areaCode from "../../../area.json";
import SearchBarOptions from "./SearchBarOptions";

const SearchBar = ({ onSearch, placeholder }) => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(null);

  const getOptions = (inputValue) => {
    const newOptions = [];
    const { data } = areaCode;

    data.forEach((area) => {
      if (area.name.includes(inputValue)) {
        const temp = area.name.split(inputValue);
        const text = {
          front_nomarlPart: temp[0],
          highlight: inputValue,
          back_nomarlPart: temp[1],
          area,
        };
        newOptions.push(text);
      }
    });
    setOptions(newOptions);
  };

  const onChange = (_, newValue) => {
    if (newValue?.area) {
      onSearch(newValue.area);
      setValue(newValue.area.name);
    }
  };

  const onInputChange = (_, inputValue) => {
    if (inputValue.length === 0) {
      setOptions([]);
      return;
    }
    getOptions(inputValue);
  };

  const displaySelectedOnInput = (option) => {
    if (option.area) {
      return option.area.name;
    }
    return option;
  };

  const isOptionEqualToValue = (o, v) => {
    return o.area.name === v;
  };

  const inputRef = useRef();

  const onFocus = () => {
    if (!inputRef.current.value.length) {
      setOptions([]);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Autocomplete
        autoComplete
        autoHighlight
        includeInputInList
        selectOnFocus
        blurOnSelect
        freeSolo
        options={options}
        onChange={onChange}
        value={value}
        onInputChange={onInputChange}
        filterOptions={(x) => x}
        getOptionLabel={displaySelectedOnInput}
        isOptionEqualToValue={isOptionEqualToValue}
        onFocus={onFocus}
        renderOption={(optionProps, option) => (
          <SearchBarOptions
            key={optionProps.id}
            optionProps={optionProps}
            option={option}
          />
        )}
        renderInput={(params) => (
          <SearchBarInput
            params={params}
            ref={inputRef}
            placeholder={placeholder}
          />
        )}
      />
    </Box>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
