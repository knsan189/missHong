import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Autocomplete, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/styles";
import SearchBarInput from "./SearchBarInput";
import areaCode from "../../../area.json";
import SearchBarOptions from "./SearchBarOptions";

const SearchBar = ({ onSearch }) => {
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
    if (newValue.area) {
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

  return (
    <Box>
      <Autocomplete
        autoComplete
        autoHighlight
        includeInputInList
        selectOnFocus
        blurOnSelect
        options={options}
        onChange={onChange}
        value={value}
        onInputChange={onInputChange}
        filterOptions={(x) => x}
        getOptionLabel={displaySelectedOnInput}
        renderOption={(optionProps, option) => (
          <SearchBarOptions
            key={optionProps.id}
            optionProps={optionProps}
            option={option}
          />
        )}
        renderInput={(params) => <SearchBarInput params={params} />}
      />
    </Box>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
