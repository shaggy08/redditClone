import "./App.css";
import Header from "./Component/Header";
import { CreatePostIcon } from "./Component/CreatePostIcon";
import CreatePost from "./Component/CreatePost";
import Post from "./Component/Post";
import Feed from "./Component/Feed";
import Comment from "./Component/Comment";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comment/:id" element={<Comment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
