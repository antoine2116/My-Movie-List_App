interface MovieAdditionalInfosProps {
  original_language: string;
  release_date: string;
  budget: number;
  revenue: number;
}

function MovieAdditionalInfos({
  original_language,
  release_date,
  budget,
  revenue
} : MovieAdditionalInfosProps) {
  return (
    <>
      <div className="text-black font-semibold">
        Release Date
      </div>
      <div className="text-gray-700 text-sm mb-3">
        {release_date}
      </div>
      <div className="text-black font-semibold">
        Original Language
      </div>
      <div className="text-gray-700 text-sm mb-3">
        {original_language}
      </div>
      <div className="text-black font-semibold">
        Budget
      </div>
      <div className="text-gray-700 text-sm mb-3">
        $ {budget?.toLocaleString()}
      </div>
      <div className="text-black font-semibold">
        Revenue
      </div>
      <div className="text-gray-700 text-sm mb-3">
        $ {revenue?.toLocaleString()}
      </div>
    </>
  )
}

export default MovieAdditionalInfos;