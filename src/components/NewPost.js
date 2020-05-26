import React, { useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import "./common.css";

function NewPost() {
  const [added, setAdded] = useState(false);
  const [display, setdisplay] = useState(true);
  const [field, setField] = useState({
    title: "",
    body: "",
    userID: 1,
  });

  function handleChange(e) {
    const target = e.target;
    setField((field) => {
      return {
        ...field,
        [target.name]: target.value,
      };
    });
  }

  function handleSubmit(e) {
    setdisplay(false);

    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", field, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setAdded(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Request Failed!");
      });
  }

  return (
    <div className="new-post">
      <form className="form-container" onSubmit={handleSubmit}>
        <h3>Add a Post</h3>
        <label>Title</label>
        <input
          type="text"
          className="form-fields"
          name="title"
          onChange={handleChange}
        />
        <label>Content</label>
        <textarea
          className="form-fields"
          name="body"
          rows="4"
          cols="50"
          onChange={handleChange}
        />
        {display ? (
          <button type="submit" className="delete-btn" onClick={handleSubmit}>
            Add Post
          </button>
        ) : added ? (
          <div>
            <h1>Post Added</h1>
          </div>
        ) : (
          <Loader />
        )}
      </form>
    </div>
  );
}

export default NewPost;
