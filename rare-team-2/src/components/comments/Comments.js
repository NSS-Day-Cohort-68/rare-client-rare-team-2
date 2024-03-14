import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createComment } from "../../services/commentServices";
import { CommentList } from "./CommentList";
import "./Comments.css";

export const Comments = ({ currentUser }) => {
  const { id: postId } = useParams();
  const [comment, setComment] = useState({
    post_id: postId,
    author_id: currentUser.id,
    content: "",
  });

  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    if (comment.content) {
      createComment(comment).then(navigate(`/posts/${postId}/comments`));
    } else {
      window.alert("Please complete all fields");
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <h2>Post title:</h2>
      <h2>Comments</h2>
      <form>
        <fieldset>
          <div>
            <input
              type="text"
              id="comment"
              className="form-control"
              placeholder="Enter comment here!"
              onChange={(e) => {
                const copy = { ...comment };
                copy.post_id = postId;
                copy.content = e.target.value;
                copy.author_id = currentUser.id;
                setComment(copy);
              }}
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="send-btn" onClick={handleSave}>
              Send
            </button>
          </div>
        </fieldset>
      </form>
      <CommentList postId={postId} />
    </main>
  );
};
