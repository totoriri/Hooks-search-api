import React from "react";

function Posts({ posts, loading }) {
  if (loading) {
    return <h4>loading...</h4>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map(post => (
        <li className="list-group-item">{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
