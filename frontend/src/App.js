import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Component/Post";

function App() {
  let [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let url = "http://localhost:3000/posts";
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App container">
      {data.map((post, index) => {
        return (
          <Post
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </div>
  );
}

export default App;

/*

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import NotFound from './Component/NotFound';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );
}

export default App;
*/