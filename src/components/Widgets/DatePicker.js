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

function DatePickers(props) {
  const { classes, label, updateDate } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label={label}
        type="date"
        defaultValue={Now.date("-")}
        className={classes.textField}
        InputLabelProps={{ shrink: true }}
        onChange={(e) => updateDate(e)}
      />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  updateDate: PropTypes.func
};

export default withStyles(styles)(DatePickers);
