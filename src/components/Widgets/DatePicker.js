import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {Now} from '../../helpers/timeDate'

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
  const { classes, label } = props;

  const todaysDate = Now.date('-')

  return <form className={classes.container} noValidate>
      <TextField id="date" label={label} type="date" defaultValue={todaysDate} className={classes.textField} InputLabelProps={{ shrink: true }} />
    </form>;
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string
};

export default withStyles(styles)(DatePickers);
