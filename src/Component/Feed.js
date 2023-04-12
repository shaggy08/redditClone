import React, { useState, useEffect, useRef } from "react";
import Posts from "./Posts";
import Post from "./Post";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Feed({ postId, setpostId }) {
  const [postData, setPostdata] = useState([]);
  const [postmessage, setPostmessage] = useState();
  const [loading, setloading] = useState(false);

  const intervalIdRef = useRef(null);

  const request = axios.create({
    baseURL: "https://43.205.68.78:8080/",
    headers: {
      "Content-Type": "application/json",
      token: `master`,
    },
  });
  //   let bodyData = {
  //     inputPrompt: "Write a poem about Jack and Jill !!",
  //     inputType: "TEXT",
  //     model: "GPT_3",
  //     creativity: 0.25,
  //     wordLimit: 2000,
  //   };

  //   const createPost = async () => {
  //     console.log("imclied");
  //     const data = await request.post("saaraansh/promptit/post", bodyData);

  //     console.log(data.data);
  //   };

  const getCreatedPost = async (postid) => {
    setloading(true);
    console.log("inside get request");
    const data = await request.get(
      `saaraansh/promptit/post?requestId=${postid}`
    );
    if (data.data.message === "COMPLETED") {
      // console.log(data.data.post.requestParams);
      const res = data.data.post;
      setPostdata([...postData, res]);
      setloading(false);
      clearInterval(intervalIdRef.current);
    }
  };
  //   useEffect(() => {
  //     console.log("id", postId);
  //     getCreatedPost(postId);
  //   }, [postId]);
  console.log(postData);

  useEffect(() => {
    console.log("inside effect", postId);
    if (!postId) {
      console.log("null post id");
      return;
    }
    intervalIdRef.current = setInterval(() => {
      getCreatedPost(postId);
    }, 5000);

    return () => clearInterval(intervalIdRef.current);
  }, [postId]);

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    console.log(id);
    if (id != null) {
      navigate(`comment/${id}`);
    }
  };
  return (
    <div>
      <div>
        {loading ? (
          <p>loadin</p>
        ) : (
          <div>
            {postData.length > 0 ? (
              postData.map((post, id) => (
                <Post
                  key={id}
                  //   link={() => handleNavigate(post.id)}
                  title={post.requestParams.inputPrompt}
                  body={post.content.text}
                  upvote={1}
                  subredit={"idk"}
                  image={""}
                />
              ))
            ) : (
              <p>create a post</p>
            )}
          </div>
        )}
      </div>

      {Posts.map((post, id) => (
        <Post
          link={(id) => handleNavigate(id)}
          key={id}
          id={post.id}
          title={post.title}
          body={post.body}
          upvote={post.upvote}
          subredit={post.subredit}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
