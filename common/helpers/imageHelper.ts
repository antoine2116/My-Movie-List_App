export const getImageUrl = (path: string) => {
  return path != null ? `https://image.tmdb.org/t/p/w500/${path}` : "/poster_placeholder.png";
}