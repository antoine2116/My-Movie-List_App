import { MovieDetails } from "../../models/MovieDetails";
import { Video } from "../../models/Video";

const sites = {
  "youtube": "https://www.youtube.com/watch?v=",
  "vimeo": "https://player.vimeo.com/video/"
};

export const getMovieTrailerUrl = (movie: MovieDetails): string | undefined => {
  const trailer = movie.videos.results.find((video) => 
    video.type === "Trailer"
  );

  if (!trailer) return undefined;

  return sites[trailer.site.toLowerCase() as keyof typeof sites] + trailer.key;
}