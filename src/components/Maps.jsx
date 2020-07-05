import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './Maps.scss';

export class Maps extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map 
        google={this.props.google}
        zoom={10}
        style={{ width: '100%', height: '100%' }}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

const apikey = process.env.GOOGLE_API_KEY;

export default GoogleApiWrapper({
  apiKey: apikey
  // apiKey: `${process.env.GOOGLE_API_KEY}`
})(Maps);