import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import RestoreIcon from "material-ui-icons/Restore";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import BottomNavigation, {
  BottomNavigationButton
} from "material-ui/BottomNavigation";

const styles = {
  body: {
    flex: 1
  }
};

class Layout extends Component {
  static get propTypes() {
    return {
      classes: PropTypes.object.isRequired
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Tanker
            </Typography>
          </Toolbar>
        </AppBar>

        <div className={classes.body}>{this.props.children}</div>

        <BottomNavigation value={0} showLabels>
          <BottomNavigationButton labels="recents" icon={<RestoreIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
