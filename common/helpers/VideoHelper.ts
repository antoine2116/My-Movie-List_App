import { MovieDetails } from "../../models/MovieDetails";
import { Video } from "../../models/Video";

const sites = {
  "youtube": "https://www.youtube.com/watch?v=",
  "vimeo": "https://player.vimeo.com/video/"
};

export const getMovieTrailer = (movie: MovieDetails): Video | undefined => {
  return movie.videos.results.find((video) => 
    video.type === "Trailer"
  );
}

export const generateVideoUrl = (video: Video): string | undefined => {
  if (!video) return undefined;
  return sites[video.site.toLowerCase() as keyof typeof sites] + video.key;
}