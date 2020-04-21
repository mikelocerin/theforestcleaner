import React, {Component} from 'react'
import {Card,CardText,CardTitle,CardActions,Button} from 'react-mdl'

class DirtyPoint extends Component {

    render(){
        const {title} = this.props
        return(
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                {title}
                </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        )}
}
export default DirtyPoint