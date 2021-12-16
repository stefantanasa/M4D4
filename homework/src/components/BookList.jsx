import SingleBook from "./SingleBook";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import React from "react";

class BookList extends React.Component {
    state={
        serachQuery: ""

    }


  render() {
    return (
      <Container>

<Form inline>
    <FormControl
     type="text" 
     placeholder="Search" 
     className=" mr-sm-2"
     value= {this.state.serachQuery}
     onChange={e=>this.setState({serachQuery: e.target.value})}
     />
    
  </Form>

        <Row>
          {this.props.books.filter(b=> b.title.toLocaleLowerCase().includes(this.state.serachQuery.toLocaleLowerCase())).map((b) => (
            <Col xs={3}>
              <SingleBook book={b} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
