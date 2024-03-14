import { useEffect, useState } from "react";
import { getCommentsByPostId } from "../../services/commentServices";
import { Link } from "react-router-dom";

export const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const getAndSetComments = () => {
    getCommentsByPostId(postId).then((fetchedComments) => {
      setComments(fetchedComments);
    });
  };

  useEffect(() => {
    getAndSetComments();
  }, []);

  return (
    <article className="commentContainer">
      <div className="comments">
        {comments.map((comment) => {
          return (
            <section key={comment.id} className="comment">
              <div className="comment-card">
                <p>{comment.created_on}</p>
                <p>{comment.user}:</p>
                <p>{comment.content}</p>
              </div>
              <button>Delete</button>
            </section>
          );
        })}
      </div>
      <Link to={`../myposts/${postId}`}>
        <button>Back to Post</button>
      </Link>
    </article>
  );
};
