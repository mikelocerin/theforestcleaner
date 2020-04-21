import React, {Component} from 'react'
import DirtyPoint from './dirtypoint.js'
import MockData from '../mockdata.json'
import {Grid,Cell} from 'react-mdl'

class Panel extends Component {

    constructor(){
        super()
        console.log('constructor')
        this.state = { dirtyPoints:[] }
    
        }

    componentDidMount(){
        console.log("didmount")
        this.setState({dirtyPoints:MockData})
    }
    render(){
        console.log(this.state.dirtyPoints)
        return(
                <Grid className="demo-grid-1">
                    {this.state.dirtyPoints.map((point,i) =>
                    <DirtyPoint key={i} title={point.title}></DirtyPoint>)}
                </Grid>
        )
    }
}

export default Panel