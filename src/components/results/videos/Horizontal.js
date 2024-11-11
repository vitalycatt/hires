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

function Horizontal({className}) {
  return (
    <div className={`videos__horizontal${className ? ' ' + className : ''}`}>
      {videos.map((item, index) => {
        if ((index + 1) % 3 === 0) {
          return <Card className='card-vertical-m' key={index} item={item} />;
        }
        return <Card key={index} item={item} />;
      })}
    </div>
  );
}

export default Horizontal;
