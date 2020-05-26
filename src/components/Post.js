import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PostCard from "./PostCard";
import PostDetails from "./PostDetails";
import "./common.css";
import Loader from "./Loader";

function Post() {
  const [post, setPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setPost(res.data.slice(0, 4));
        const url = window.location.href;
        const id = url.slice(url.lastIndexOf("/") + 1);
        if (Number(id) && id > 0 && id < 5) {
          setSelectedPost(id);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Request Failed!");
      });
  }, []);

  function handleClick(id) {
    setSelectedPost(id);
  }

  return (
    <>
      <div className="post-container">
        {post ? (
          post.map((post, index) => {
            return (
              <NavLink
                activeClassName="selected-post"
                key={post.id}
                to={`/posts/${post.id}`}
              >
                <div onClick={() => handleClick(post.id)}>
                  <PostCard post={post} />
                </div>
              </NavLink>
            );
          })
        ) : (
          <Loader />
        )}
      </div>

      {selectedPost && <PostDetails selectedPost={selectedPost} />}
    </>
  );
}

export default Post;
