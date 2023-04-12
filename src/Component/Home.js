import React, { useState } from "react";
import Header from "./Header";
import CreatePost from "./CreatePost";
import Feed from "./Feed";

function Home() {
  const [postId, setpostId] = useState();

  return (
    <div>
      <CreatePost postId={postId} setpostId={setpostId} />
      <Feed postId={postId} setpostId={setpostId} />
    </div>
  );
}

export default Home;
