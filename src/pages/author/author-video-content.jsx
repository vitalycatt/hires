import ReelImage1 from "../../assets/images/video-content/Reel-1.png";
import VideoImage1 from "../../assets/images/video-content/Video-1.png";
import { ReelItem } from "../../components/reel-content-list/reel-item";
import { VideoItem } from "../../components/video-content-list/video-item";

export const AuthorVideoContent = () => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="grid grid-cols-7 gap-1.5 max-h-[333px]">
        <div className="col-span-1 row-span-1 h-full w-full">
          <ReelVertical />
        </div>

        <div className="col-span-1 row-span-1 h-full">
          <ReelVertical />
        </div>

        <div className="col-span-3 row-span-1 h-full">
          <LargeVideoHorizontal />
        </div>

        <div className="col-span-1 row-span-1 h-full">
          <ReelVertical />
        </div>

        <div className="col-span-1 row-span-1 h-full">
          <ReelVertical />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1.5 max-h-[189px]">
        <div className="col-span-1 row-span-1 h-full">
          <VideoHorizontal />
        </div>

        <div className="col-span-1 row-span-1 h-full">
          <VideoHorizontal />
        </div>

        <div className="col-span-1 row-span-1 h-full">
          <VideoHorizontal />
        </div>

        <div className="col-span-1 row-span-1 h-full">
          <VideoHorizontal />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1.5 max-h-[333px]">
        <div className="col-span-3 row-span-1 h-full">
          <LargeVideoHorizontal />
        </div>

        <div className="col-span-1 row-span-1 h-full">
          <ReelVertical />
        </div>

        <div className="col-span-3 row-span-1 h-full">
          <LargeVideoHorizontal />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1.5 max-h-[189px]">
        <div className="col-span-1 row-span-1 h-full">
          <VideoHorizontal />
        </div>

        <div className="col-span-1 row-span-1 h-full">
          <VideoHorizontal />
        </div>

        <div className="col-span-1 row-span-1 h-full">
          <VideoHorizontal />
        </div>

        <div className="col-span-1 row-span-1 h-full">
          <VideoHorizontal />
        </div>
      </div>
    </div>
  );
};

const VideoHorizontal = () => {
  return (
    <>
      <VideoItem
        item={{
          title: "The Wave bla bla",
          url: `${VideoImage1}`,
          duration: "1:20",
        }}
      />
    </>
  );
};

const LargeVideoHorizontal = () => {
  return (
    <>
      <VideoItem
        item={{
          title: "The Wave bla bla",
          url: `${VideoImage1}`,
          duration: "1:20",
        }}
      />
    </>
  );
};

const ReelVertical = () => {
  return (
    <>
      <ReelItem
        item={{
          title: "The Wave bla bla",
          url: `${ReelImage1}`,
          duration: "1:20",
        }}
      />
    </>
  );
};
