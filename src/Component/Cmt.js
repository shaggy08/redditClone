import React, { useState } from "react";
import "./Cmt.css";
import { FaReply, FaEdit, FaTrash } from "react-icons/fa";
import Avtar from "./Avtar";

function Cmt({ ind }) {
  const [open, setcopen] = useState(false);
  const renderChildren = () => {
    return ind.child.map((c, key) => <Cmt ind={c} />);
  };

  return (
    <div className="cmt">
      <button
        onClick={() => setcopen(!open)}
        className="collapse-line"
        aria-label="hide-riples"
      />
      <div className="cmt-cont">
        <div className="cmt-header">
          <Avtar avtar={ind.user} />
          <p>{ind.user}</p>
        </div>

        <div className="cmt-body">
          <p>{ind.body}</p>
        </div>

        <div className="cmt-footer">
          <button
            className={`cmt-icon ${open ? "hide" : ""} `}
            onClick={() => setcopen(!open)}
          >
            {" "}
            {open ? "close" : "show replies"}{" "}
          </button>
          <FaReply className="cmt-icon" />
          <FaEdit className="cmt-icon" />
          <FaTrash className="cmt-icon" />
        </div>

        {open ? renderChildren() : ""}
      </div>
    </div>
  );
}

export default Cmt;
