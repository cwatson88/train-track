import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Now } from "../../helpers/timeDate";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

function TimePickers(props) {
  const { classes, label, updateTime } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        label={label}
        type="time"
        defaultValue={Now.time}
        className={classes.textField}
        InputLabelProps={{ shrink: true }}
        inputProps={
          { step: 300 } // 5 min
        }
        onChange={(e) => updateTime(e)}
      />
    </form>
  );
}

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  updateTime: PropTypes.func
};

export default withStyles(styles)(TimePickers);
