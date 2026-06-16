import { useState } from "react";
import "./App.css";

export default function App() {

  const [videos] = useState([
    {
      id: 1,
      username: "Mikko",
      caption: "Mun eka video 🔥",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      likes: 12
    },
    {
      id: 2,
      username: "Emma",
      caption: "Kesä vibes ☀️",
      src: "https://www.w3schools.com/html/movie.mp4",
      likes: 55
    }
  ]);

  return (
    <div className="app">
      {videos.map((video) => (
        <div className="videoContainer" key={video.id}>
          
          <video
            className="video"
            src={video.src}
            controls
            autoPlay
            loop
          />

          <div className="info">
            <h3>@{video.username}</h3>
            <p>{video.caption}</p>
            <button>❤️ {video.likes}</button>
          </div>

        </div>
      ))}
    </div>
  );
}body {
  margin: 0;
  background: black;
  font-family: Arial;
}

.app {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.videoContainer {
  position: relative;
  height: 100vh;
  scroll-snap-align: start;
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  position: absolute;
  bottom: 80px;
  left: 20px;
  color: white;
}

button {
  padding: 10px;
  border: none;
  border-radius: 20px;
  background: red;
  color: white;
  cursor: pointer;
}
