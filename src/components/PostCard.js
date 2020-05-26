import React from "react";
import "./common.css";

function PostCard({ post }) {
  return <div className="post">{post.title}</div>;
}

export default PostCard;
