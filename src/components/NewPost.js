import React from "react";
import "./common.css";

function NewPost() {
  return (
    <div className="new-post">
      <form className="form-container">
        <h3>Add a Post</h3>
        <label>Title</label>
        <input type="text" className="form-fields" />
        <label>Content</label>
        <textarea className="form-fields" />
        <button className="form-fields">Add Post</button>
      </form>
    </div>
  );
}

export default NewPost;
