import { WatchProvider } from "../../models/WatchProvider";
import  Image from "next/image";
interface WatchProvidersProps {
  providers?: WatchProvider[];
}

function WatchProviders({
  providers
}: WatchProvidersProps) {

  return (
    <>
      <div>
        <div className="text-xl font-semibold text-white mb-3">
          Available in streaming
        </div>
        <div className="flex flex-row space-x-4">
          {providers && providers.map((provider: WatchProvider) => (
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
    </>
  )
}

export default WatchProviders;