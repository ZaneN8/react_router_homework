import React from "react"
import { Card } from 'semantic-ui-react'

class VictorStickies extends React.Component{
    render() {

        return(
            <Card>
            <Card.Content header={this.props.title } />
            <Card.Content description={this.props.body } />
          </Card>
        )
    }
}
export default VictorStickies;