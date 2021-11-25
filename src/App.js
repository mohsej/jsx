
import './App.css';
import React from 'react';
import image1 from './imageInSrc.jpg';
import myVideo from "./myVideo.mp4";
function App() {
  return (
      <div className="flex">
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title">Hello</h1>
    <br />
    <img src={image1} alt="imagesrc"/>
    <br />
    <img src="./imageInPublic.png" alt="imagepub"/>
  </div>
  <video width={320} height={240} controls>
    <source src={myVideo} type="video/mp4" />
  </video>
</div>
) ;
}

export default App;