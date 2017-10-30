import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import LocationSearchingIcon from "material-ui-icons/LocationSearching";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import BottomNavigation, {
  BottomNavigationButton
} from "material-ui/BottomNavigation";

import Map from "../map/map.component";

const styles = {
  body: {
    position: "relative",
    width: "100%",
    height: "calc(100% - 56px - 56px)"
  }
};

const DEFAULT_VIEWPORT = {
  center: [48.864716, 2.349014],
  zoom: 13
};

class Layout extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      viewport: DEFAULT_VIEWPORT
    };

    this.locate = this.locate.bind(this);
  }

  static get propTypes() {
    return {
      classes: PropTypes.object.isRequired
    };
  }

  locate() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const { zoom } = this.state.viewport;

        this.setState({
          viewport: {
            center: [latitude, longitude],
            zoom: this.state.viewport.zoom
          }
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  render() {
    const { classes } = this.props;
    const { viewport } = this.state;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Tanker
            </Typography>
          </Toolbar>
        </AppBar>

        <div className={classes.body}>
          <Map viewport={viewport} onReady={this.locate} />
        </div>

        <BottomNavigation value={-1} showLabels>
          <BottomNavigationButton
            label="Search"
            onClick={this.locate}
            icon={<LocationSearchingIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
