import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Switch from "@material-ui/core/Switch";

const VirginTrains = props => {
  const { virginTrains, getVirginTrains, disabled } = props;
  return (
    <Fragment>
      <Switch
        checked={virginTrains}
        onClick={e => getVirginTrains(!virginTrains)}
        value="getVirginTrains"
        color="secondary"
        disabled={disabled}
      />
      <span>only Virgin trains</span>
    </Fragment>
  );
};

VirginTrains.propTypes = {
  virginTrains: PropTypes.bool,
  getVirginTrains: PropTypes.func
};

export default VirginTrains;
