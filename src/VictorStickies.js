import React from "react"
import { Card } from 'semantic-ui-react'
import VictorForm from "./VictorForm"


class VictorStickies extends React.Component{
    render() {
        //const { id, title, body } = this.props;
        return(
            <>
            <Card>
            <Card.Content header={this.props.title } />
            <Card.Content description={this.props.body } />
          </Card>
          </>
        )
    }
}
export default VictorStickies;