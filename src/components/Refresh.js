import React from "react";
import PropTypes from "prop-types";
import { Select, InputLabel, MenuItem } from "@material-ui/core";

const Refresh = props => {
  const { refreshRate, changeRefreshRate } = props;
  const handleChange = e => {
    console.log(e.target.value);
    changeRefreshRate(e.target.value);
  };
  return (
    <div>
      <InputLabel htmlFor="age-simple">Refresh Every: </InputLabel>
      <Select
        value={refreshRate}
        onChange={e => handleChange(e)}
        inputProps={{
          name: "age",
          id: "age-simple"
        }}
      >
        <MenuItem value="manual">Manual</MenuItem>
        <MenuItem value={10000}>10</MenuItem>
        <MenuItem value={30000}>30</MenuItem>
        <MenuItem value={60000}>60</MenuItem>
      </Select>
    </div>
  );
};

Refresh.propTypes = {
  changeRefreshRate: PropTypes.func,
  refreshRate: PropTypes.any
};

export default Refresh;
