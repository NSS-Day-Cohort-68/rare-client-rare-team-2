import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createComment } from "../../services/commentServices";
import { CommentList } from "./CommentList";
import "./Comments.css";
import { getPostdets } from "../../services/postServices";

export const Comments = ({ currentUser }) => {
  const { id: postId } = useParams();
  const [comment, setComment] = useState({
    post_id: postId,
    author_id: currentUser.id,
    content: "",
  });
  const [post, setPost] = useState({});

  const getAndSetPost = () => {
    getPostdets(postId).then((data) => {
      const p = data;
      setPost(p);
    });
  };

  useEffect(() => {
    getAndSetPost();
  }, []);

  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    if (comment.content) {
      createComment(comment).then(window.location.reload());
    } else {
      window.alert("Please complete all fields");
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <h1>Post title: {post.title}</h1>
      <h2>Comments Section</h2>
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
