import React from "react"
import { Card, Icon } from 'semantic-ui-react'

class VictorStickies extends React.Component{
    state = { title: "", body: ""};
    
    render(){
        return(
            <Card>
            <Card.Content header='About Amy' />
            <Card.Content description="here goes the story " />
          </Card>
        )
    }
}
export default VictorStickies;