import React from "react";
import CommentsList from "./CommentsList";

class CommentArea extends React.Component {

    state = {
        comments:[]
    }
  fetchComments = async () => {
      let asin = this.props.asin
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2Mzk2OTM3MjksImV4cCI6MTY0MDkwMzMyOX0._tiFypBDzeJZA4PTEpHkBTNJ1adllHbB7DBwuP5NUMc",
          },
        }
      );
      if (response.ok){
          let comments = await  response.json()
          console.log(comments)
          this.setState({comments:comments})
      }
    } catch (error) {
      console.log("Something went wrong!");
    }
  };
  
componentDidMount = async()=>{
    this.fetchComments()
}

  render() {
    return (
      <div>
        <CommentsList   commentsToShow={this.state.comments}/>
        
      </div>
    );
  }
}
export default CommentArea;
