import React from "react";
import Card from "../../card/Card";
const videos = [
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-1.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-2.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-3.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-4.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-5.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-6.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-7.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-6.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-1.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-8.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-3.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-4.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-1.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-2.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-3.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-4.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-5.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-6.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-7.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-6.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-1.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-8.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-3.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-4.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-5.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-6.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-7.png",
    time: "01:14",
    to: "",
  },
  {
    name: "The Wave: Natural...",
    src: "./images/videos/image-6.png",
    time: "01:14",
    to: "",
  },
];
function Vertical({className}) {
  return (
    <div className={`videos__vertical${className ? ' ' + className : ''}`}>
      {videos.map((item, index) => {
     
        return <Card  className="card-vertical" key={index} item={item} />;
      })}
    </div>
  );
}

export default Vertical;
