import React from "react";
import PropTypes from "prop-types";
import trainCodes from "../../trainCodes";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const TrainCompany = props => {
  const { trainCompany, updateTrainCompany } = props;
  const setTrainCompany = train => e => {
    const TrainProvider = { company: e, ATOC: train };
    updateTrainCompany(TrainProvider);
  };
  return (
    <FormControl style={{ minWidth: "120px" }}>
      <InputLabel htmlFor="train-company">Train Company</InputLabel>
      <Select
        value={trainCompany && trainCompany.company}
        onChange={this.handleChange}
        inputProps={{ name: "trainCompany", id: "train-company" }}
      >
        {trainCodes.map(company => (
          <MenuItem
            key={company["ATOC Code"]}
            onClick={setTrainCompany()}
            value={company["ATOC Code"]}
          >
            {company["Company Name"]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

TrainCompany.propTypes = {
  filterTrainCompany: PropTypes.func
};

export default TrainCompany;
