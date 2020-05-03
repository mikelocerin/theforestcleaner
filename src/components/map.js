import React, {Component} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import DirtyPoints from '../dirtypoints.json'
import Caca from '../caca.jpg'

const TOKEN_PUBLIC = 'pk.eyJ1IjoibWFpa292IiwiYSI6ImNrOWs4NGNpczA0dnozZWxmN3FkcnFrMWwifQ.xsueUBgzsK_quSjHfkXqCA';

class Map extends Component {
 
    state = {
      viewport: {
        width: 400,
        height: 400,
        longitude: -122.45,
        latitude: 37.78,
        zoom: 14
      },
      features: [],
    
  }
  componentDidMount(){
    this.setState({features:DirtyPoints})
}
  render() {
    const { features,viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN_PUBLIC}
        mapStyle="mapbox://styles/maikov/ck9kdf1mk03s71ipnr2h2vmi3"
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        {features.map((dirtypoint) => (
          <Marker key={dirtypoint.id}
          latitude={dirtypoint.geometry.coordinates[0]}
          longitude={dirtypoint.geometry.coordinates[1]}>
          >
            <img style={{width: '50px', height: '50px'}}src ={Caca}></img>
          </Marker>

        ))}
      </ReactMapGL>
    );
  }
}

export default Map