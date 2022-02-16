import React, { useState } from 'react';
import './Postview.css';
import logo from "./images/logo.png"
import camera from "./images/camera.png"
import axios from "axios"
import more from "./images/more.png"
import vijay from "./images/vijay.jpg"
import Likes from "./images/Likes.png"
import tag from "./images/tag.png"


const Postview = () => {
  const [posts, setpost] = useState([])
  React.useEffect(() => {
    axios.get("http://localhost:3004/user").then(res => {
      setpost(res.data)
    })

  }, [])






  return (
    <div className="site-container">
      <div className='header'>
        <header>
          <span id="logo">
            <img src={logo} alt="logo" width="25" height="25" />
            <strong id="insta">Instaclone</strong>
          </span>
          <div id="camera">
            <img src={camera} alt="camera" />
          </div>
        </header>
      </div>
      <hr />
      <div className='card'>
        {posts.map((post) => {
          return (
            <div className='card'>
              <div className="instacard">
                <div className="postheader">
                  <div className="person">
                    <strong>{post.name}</strong>
                    <br></br>
                    <span>{post.location}</span>
                  </div>
                  <div className="moreimg">
                    <img src={more} alt="more" />
                  </div>
                </div>
                <div className="postbody">
                  <img src={post.PostImage} alt="vijay" width="300" height="220" />

                </div>
                <div className="postfooter">
                  <div className="impress1">
                    <img className="myheart" src={Likes} alt="heart" />
                    <img src={tag} alt="tag" />
                    <br></br>
                    <button>{post.likes}likes</button>
                  </div>
                  <div className="datee">
                    <p>{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                  <p className="ptag"><strong>{post.description}</strong></p>
                </div>
              </div>
            </div>
          )


        })}
      </div>
    </div>
  );
}

export default Postview;
