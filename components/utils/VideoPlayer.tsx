import { log } from "console";
import ReactPlayer from "react-player";
import { generateVideoUrl } from "../../common/helpers/VideoHelper";
import { Video } from "../../models/Video";

interface VideoPlayerProps {
  video: Video | undefined;
}

function VideoPlayer({
  video
}: VideoPlayerProps) {
  if (video === undefined) return null;

    return (
    <>
      <ReactPlayer 
        url={generateVideoUrl(video)}
        controls={true}
        width={1280}
        height={720}
      />
    </>
  )
}

export default VideoPlayer;