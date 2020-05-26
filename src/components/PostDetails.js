import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";

import "./common.css";

function PostDetails({ selectedPost }) {
  const [post, setPost] = useState(null);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${selectedPost}`)
      .then((res) => {
        const post = res.data;
        setPost(post);
        setDeleted(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Request Failed!");
      });
  }, [selectedPost]);

  function handleDelete(id) {
    setPost(null);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log("post deleted");
        setDeleted(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Request Failed!");
      });
  }

  return post ? (
    <div className="details-container">
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button className="delete-btn" onClick={() => handleDelete(post.id)}>
          Delete
        </button>
      </div>
    </div>
  ) : deleted ? (
    <div className="deleted-post">
      <h1>Post Deleted</h1>
    </div>
  ) : (
    <Loader />
  );
}

export default PostDetails;
