import React from "react";
import "./Header.css";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiFillBell,
  AiOutlineVideoCameraAdd,
  AiOutlineGlobal,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { GoSignIn } from "react-icons/go";
function Header() {
  return (
    <div className="header-container">
      <div className="head-img-container">
        <img
          className="header-img"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div className="head-home">
        <AiFillHome />
        <p>Home</p>
        <MdKeyboardArrowDown />
      </div>
      <form className="header-form">
        <AiOutlineSearch className="form-icon" />
        <input
          type="text"
          placeholder="search rediit"
          className="form-input"
        ></input>
        <button type="submit" hidden></button>
      </form>
      <div className="icon">
        <AiOutlineVideoCameraAdd className="icons" />
        <AiOutlineGlobal className="icons" />
        <hr />
        <BsFillChatLeftTextFill className="icons" />
        <AiOutlinePlusCircle className="icons" />
        <AiFillBell className="icons" />
        <GoSignIn className="icons" />
        <GiHamburgerMenu className="ham-icon" />
      </div>
    </div>
  );
}

export default Header;
