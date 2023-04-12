import React, { useState } from "react";
import "./CreatePost.css";
import Avtar from "./Avtar";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";

function CreatePost({ postId, setpostId }) {
  const [session, setsession] = useState(true);
  const [inputvalue, setinputvalue] = useState({});
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const request = axios.create({
    baseURL: "https://43.205.68.78:8080/",
    headers: {
      "Content-Type": "application/json",
      token: `master`,
    },
  });
  let bodyData = {
    inputPrompt: "",
    inputType: "TEXT",
    model: "GPT_3",
    creativity: 0.25,
    wordLimit: 2000,
  };

  const createPostId = async () => {
    const data = await request.post("saaraansh/promptit/post", bodyData);
    setpostId(data.data.requestId);
  };
  const onSubmit = handleSubmit(async (FormData) => {
    bodyData.inputPrompt = FormData.title;
    console.log(FormData.title);
    console.log(bodyData);
    createPostId();
  });

  return (
    <form onSubmit={onSubmit} className="Create-post">
      <div className="Create-post-container">
        <Avtar />
        <input
          {...register("title", { required: true })}
          className="create-post-input"
          type="text"
          disabled={!session}
          placeholder="type yout post"
          // onChange={handlechange}
          avtar={inputvalue}
        />

        <HiOutlinePhotograph className="icons" />
        <AiOutlineLink className="icons" />
      </div>

      {!!watch("title") && (
        <div>
          <div className="create-post-body">
            <p> Body</p>
            <input
              className="create-body-input"
              {...register("body")}
              type="text"
              placeholder=""
            ></input>
          </div>
          <div className="create-post-img">
            <p> SubRedit</p>
            <input
              className="create-body-img"
              {...register("subredit")}
              type="text"
              placeholder=""
            ></input>
          </div>
          <div className="create-post-img">
            <p> Image URL</p>
            <input
              className="create-body-img"
              {...register("image")}
              type="text"
              placeholder=""
            ></input>
          </div>
          <button type="submit" className="create-button">
            {" "}
            Create Button
          </button>
        </div>
      )}
    </form>
  );
}

export default CreatePost;
