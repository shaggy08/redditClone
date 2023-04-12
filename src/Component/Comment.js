import React, { useEffect } from "react";
import dummyComments from "./Comments";
import posts from "./Posts";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import Cmt from "./Cmt";
import "./Comment.css";
import axios from "axios";

function Comment() {
  const [post, setPost] = useState();
  const [child, setChild] = useState(null);
  const { id } = useParams();

  const p = posts.filter((ind) => ind.id == id);
  const c = dummyComments.filter((ind) => ind.postid == id);
  console.log(c);
  // setPost(p);
  //console.log(post);
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div className="comment-cont">
      <Post
        title={p[0].title}
        body={p[0].body}
        upvote={p[0].upvote}
        image={p[0].image ? p[0].image : ""}
      />
      <h2> commets</h2>
      {c.map((ind, id) => (
        <>
          <Cmt ind={ind}></Cmt>
        </>
      ))}
    </div>
  );
}

export default Comment;
