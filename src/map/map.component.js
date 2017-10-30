import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { Map as LMap, TileLayer, Marker, Popup } from "react-leaflet";

export default class Map extends Component {
  constructor(props, context) {
    super(props, context);

    const { viewport } = props;

    this.state = { viewport };

    this.onClickReset = this.onClickReset.bind(this);
    this.onViewportChanged = this.onViewportChanged.bind(this);
  }

  componentWillReceiveProps({ viewport }) {
    // When the provided viewport changes, apply it
    if (viewport !== this.props.viewport) {
      this.setState({ viewport });
    }
  }

  onClickReset() {
    const { viewport } = this.props;

    // Reset to position provided in props
    this.setState({ viewport });
  }

  onViewportChanged(viewport) {
    // The viewport got changed by the user, keep track in state
    this.setState({ viewport });
  }

  render() {
    const { onReady } = this.props;

    return (
      <LMap
        viewport={this.state.viewport}
        onViewportChanged={this.onViewportChanged}
        onClick={this.onClickReset}
        whenReady={onReady}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Marker position={this.state.viewport.center}>
          <Popup>
            <span>You are here.</span>
          </Popup>
        </Marker>
      </LMap>
    );
  }
}
