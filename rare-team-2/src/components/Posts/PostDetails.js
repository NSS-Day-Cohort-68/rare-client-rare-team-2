import React, { useEffect, useState } from "react";
import { getPostdets } from "../../services/postServices";
import { Link, useParams } from "react-router-dom";

export const PostDetails = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    fetchPostdets();
    console.log(post.author_username);
  }, []);

  const fetchPostdets = () => {
    getPostdets(postId).then((data) => {
      const p = data;
      setPost(p);
    });
  };

  return (
    <ul>
      <li
        key={post.id}
        data-type="post"
        data-id={post.id}
        data-title={post.title}
        data-content={post.content}
        className="publicationDate"
      >
        {post.publicationDate}
      </li>
      <h2>{post.title}</h2>
      <ol>{post.content}</ol>
      <ol>{post.publication_date}</ol>

      <ol>{post.author_username}</ol>
      <Link to={`/allposts/${post?.id}/comments`}>
        <button>View Comments</button>
      </Link>
    </ul>
  );
};
