import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import "./common.css";

function Post() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const posts = res.data;
      setPost(posts.slice(0, 4));
    });
  }, []);

  return (
    <div className="post-container">
      {post
        ? post.map((post, index) => {
            return <PostCard post={post} key={post.id} />;
          })
        : "Loading"}
    </div>
  );
}

export default Post;
