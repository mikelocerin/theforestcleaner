import React, {Component} from 'react'
import MapGL, {_MapContext as MapContext} from 'react-map-gl';
import MapGLDraw, { EditorModes } from 'react-map-gl-draw';
import DirtyPoints from '../dirtypoints.json'

const MODES = [
  { id: EditorModes.EDIT_VERTEX, text: 'Select and Edit Feature'},
  { id: EditorModes.DRAW_POINT, text: 'Draw Point'},
  { id: EditorModes.DRAW_PATH, text: 'Draw Polyline'},
  { id: EditorModes.DRAW_POLYGON, text: 'Draw Polygon'},
  { id: EditorModes.DRAW_RECTANGLE, text: 'Draw Rectangle'}
];

const TOKEN_PUBLIC = 'pk.eyJ1IjoibWFpa292IiwiYSI6ImNrOWs4NGNpczA0dnozZWxmN3FkcnFrMWwifQ.xsueUBgzsK_quSjHfkXqCA';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 800,
        height: 600,
        longitude: -122.45,
        latitude: 37.78,
        zoom: 14
      },
      selectedMode: EditorModes.READ_ONLY,
      features: [],
      selectedFeatureId: null
    };
  }
  componentDidMount(){
    this.setState({features:DirtyPoints})
}
  
  _updateViewport = (viewport) => {
    this.setState({viewport});
  }
  
  _onSelect = ({ selectedFeatureId }) => {
    this.setState({ selectedFeatureId });
  };
  
  _onUpdate = features => {
    this.setState({
      features
    });
  };

  _switchMode = evt => {
    const selectedMode = evt.target.id === this.state.selectedMode ? EditorModes.READ_ONLY : evt.target.id;
    this.setState({
      selectedMode,
      selectedFeatureId: null
    });
  };
  
  _renderControlPanel = () => {
    return (
      <div style={{position: absolute, top: 0, right: 0, maxWidth: '320px'}}>
        <select onChange={this._switchMode}>
          <option value="">--Please choose a mode--</option>
          {MODES.map(mode => <option value={mode.id}>{mode.text}</option>)}
        </select>
      </div>
    );
  }
  
  _getEditHandleStyle = ({feature, featureState, vertexIndex, vertexState}) => {
    return {
      fill: vertexState === `SELECTED` ? '#000' : '#aaa',
      stroke: vertexState === `SELECTED` ? '#000' : 'none'
    }
  }
  
  _getFeatureStyle = ({feature, featureState}) => {
    return {
      stroke: featureState === `SELECTED` ? '#000' : 'none',
      fill: featureState === `SELECTED` ? '#080' : 'none',
      fillOpacity: 0.8
    }
  }

  render() {
    const { viewport, selectedMode, selectedFeatureId, features } = this.state;
    return (
      <MapGL
        {...viewport}
        width="100%"
        mapboxApiAccessToken={TOKEN_PUBLIC}
        height="100%"
        mapStyle="mapbox://styles/uberdata/cive48w2e001a2imn5mcu2vrs"
        onViewportChange={this._updateViewport}
      >
        <MapGLDraw
          mode={selectedMode}
          features={features}
          selectedFeatureId={selectedFeatureId}
          onSelect={this._onSelect}
          onUpdate={this._onUpdate}
          getEditHandleStyle={this._getEditHandleStyle}
          getFeatureStyle={this._getFeatureStyle}
        />
        {this._renderControlPanel()}
      </MapGL>
    );
  }
}

export default Map