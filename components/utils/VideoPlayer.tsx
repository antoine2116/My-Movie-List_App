import ReactPlayer from "react-player";
import { useUI } from "../UIContext";
import { IoCloseOutline } from "react-icons/io5";

function VideoPlayer() {
  const { videoUrl, closeModal } = useUI();

  return (
    <>
      <div className="relative">
        <button className="absolute top-0 right-0" onClick={() => closeModal()}>
          <IoCloseOutline className="text-2xl text-white" />
        </button>
      </div>
    
      <ReactPlayer 
        url={videoUrl} 
        controls={true} 
        width={1280} 
        height={720} 
      />
    </>
  );
}

export default VideoPlayer;
