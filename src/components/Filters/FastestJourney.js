import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Switch from "@material-ui/core/Switch";

const FastestJourney = props => {
  const { quickestJourney, setQuickestJourney, disabled } = props;
  return (
    <Fragment>
      <Switch
        checked={quickestJourney}
        onClick={e => setQuickestJourney(!quickestJourney)}
        value="quickestJourney"
        color="primary"
        disabled={disabled}
      />
      <span>get the fastest next train</span>
    </Fragment>
  );
};

FastestJourney.propTypes = {
  fastJourney: PropTypes.bool,
  setFastJourney: PropTypes.func
};

export default FastestJourney;
