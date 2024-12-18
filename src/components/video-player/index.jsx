import { useRef, useState } from "react";
import ReactPlayer from "react-player";

import PlayIcon from "../../assets/icons/play.svg";
import PauseIcon from "../../assets/icons/pause.svg";
import CornersIcon from "../../assets/icons/corners.svg";
import VolumeOffIcon from "../../assets/icons/speaker-off-white.svg";
import VolumeWhiteIcon from "../../assets/icons/speaker-loud-white.svg";

export const VideoPlayer = ({ url }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);

  const playerRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (state) => {
    setProgress(state.played * 100);
    setPlayedSeconds(state.playedSeconds);
  };

  const handleDuration = (dur) => {
    setDuration(dur);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="w-min-[884px] rounded-2xl product-player relative overflow-hidden bg-black">
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={isPlaying}
        muted={isMuted}
        onProgress={handleProgress}
        onDuration={handleDuration}
        width="100%"
        height="100%"
      />

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-transparent to-transparent text-white">
        <div className="relative w-full h-1 bg-white/20 rounded-full cursor-pointer mb-[9px]">
          <div
            style={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-1 bg-white rounded"
          />
          <div
            style={{ left: `${progress}%` }}
            className="absolute -top-1 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <button onClick={togglePlayPause} className="text-white">
              <img
                src={isPlaying ? PauseIcon : PlayIcon}
                alt="control-icon"
                className="w-4 h-[17px]"
              />
            </button>

            <div className="text-sm">
              <span className="text-[#FCFCFC] mr-[4px]">
                {formatTime(playedSeconds)}
              </span>
              /
              <span className="text-[#FCFCFC]/50 ml-[4px]">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMuted((prev) => !prev)}
              className="text-white"
            >
              <img
                src={isMuted ? VolumeOffIcon : VolumeWhiteIcon}
                alt="volume-icon"
              />
            </button>

            <button className="text-white">
              <img src={CornersIcon} alt="screen-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
