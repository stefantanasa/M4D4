import React from "react"
import { Card } from "react-bootstrap"



class SingleBook extends React.Component {
  state={
    selected : false
  }
render(){
  return (

<Card

style={{width: "18rem", border: this.state.selected ? "5px solid yellow" : "none"}} 
onClick={()=>this.setState({selected: !this.state.selected})}
>
  <Card.Img variant="top" src={this.props.book.img} />
  <Card.Body>
    <Card.Title style={{color: "black"}}>{this.props.book.title}</Card.Title>
  </Card.Body>
</Card>

  )
}
}



export default SingleBook