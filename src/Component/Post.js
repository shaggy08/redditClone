import React from "react";
import "./Post.css";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineShareAlt,
} from "react-icons/ai";
import Avtar from "./Avtar";
import { FaRegCommentDots } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { TfiMore } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

function Post({ title, body, image, upvote, subredit, id, link }) {
  const imge = image;
  const navigate = useNavigate();
  const handleclick = () => {
    // console.log(id, "incalled");
    // navigate(`comment/${id}`);
    // console.log(id);
    console.log(typeof link);
    if (typeof link === "function") link(id);
  };
  console.log(link);
  return (
    <div className="post-container">
      {/* votes */}
      <div className="vote-container">
        <AiOutlineArrowUp className="vote-button like" />
        <p style={{ color: "black" }}>{upvote}</p>
        <AiOutlineArrowDown className="vote-button dislike" />
      </div>

      <div className="post-body-container" onClick={handleclick}>
        {/* head */}

        <div className="post-head">
          <Avtar avtar={title} />
          <p className="post-p">
            {" "}
            <span className="post-subredit"> r/{subredit}</span> * Posted by -
            sahil
          </p>
        </div>

        {/* body */}
        <div className="post-body">
          <h2 className="body-title"> {title}</h2>
          <p className="p-body">{body}</p>
        </div>

        {/* image */}
        <div className="post-image">
          <img
            className={!image ? "hidden" : "post-img"}
            src={image}
            alt="image"
          ></img>
        </div>

        {/* footer */}
        <div className="post-footer">
          <div className="footer-icon">
            <FaRegCommentDots
              style={{
                height: "1.2rem",
                width: "1.2rem",
                margin: "0.4rem",
              }}
            />
            <p className="footer-p"> 0 comments</p>
          </div>
          <div className="footer-icon">
            <AiOutlineShareAlt
              style={{ height: "1.2rem", width: "1.2rem", margin: "0.4rem" }}
            />
            <p className="footer-p"> share</p>
          </div>
          <div className="footer-icon">
            <BsBookmark
              style={{ height: "1.2rem", width: "1.2rem", margin: "0.4rem" }}
            />
            <p className="footer-p"> Bookmark</p>
          </div>
          <div className="footer-icon">
            <TfiMore
              style={{ height: "1.2rem", width: "1.2rem", margin: "0.4rem" }}
            />
            <p className="footer-p"> More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
