import React from "react"
import { Card } from "react-bootstrap"
import CommentArea from "./CommentArea"



class SingleBook extends React.Component {
  state={
    selected : false
  }
render(){
  return (
<>
<Card

style={{color: "black", width: "18rem", border: this.state.selected ? "5px solid yellow" : "none"}} 
onClick={()=>this.setState({selected: !this.state.selected})}
>
  <Card.Img variant="top" src={this.props.book.img} />
  <Card.Body>
    <Card.Title >{this.props.book.title}</Card.Title>
  </Card.Body>

</Card>
{
this.state.selected && <CommentArea comment="This is the comment area" asin={this.props.book.asin}  />

}

</>
  )
}
}



export default SingleBook