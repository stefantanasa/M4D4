import { ListGroup } from "react-bootstrap"

const CommentsList = ({commentsToShow}) =>(
    <ListGroup>
    {
        commentsToShow.map(comment=>(
        <ListGroup.Item style={{color:"blue"}}key={comment._id}>
            {
                comment.comment + comment.author
            }
            </ListGroup.Item>
    ))
    }
    </ListGroup>
)

export default CommentsList