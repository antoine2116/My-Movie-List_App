import { WatchProvider } from "../../models/WatchProvider";
import Image from "next/image";

interface MovieProvidersProps {
  providers: WatchProvider[];
}

function MovieProviders({
  providers
} : MovieProvidersProps) {

  if (providers.length == 0) {
    return null;
  }

  return (
    <div>
      <div className="text-xl font-semibold text-white mb-3">
        Available in streaming
      </div>
      <div className="flex flex-row justify-end space-x-4">
        {providers.map((provider: WatchProvider) => (
          <div key={provider.provider_id} className="flex flex-col items-center">
            <Image
              src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
              alt={provider.provider_name}
              width={50}
              height={50}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieProviders;