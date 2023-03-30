import Image from 'next/image'

interface SearchResultProps {
  key: any;
  title: string;
  description: string;
  image: string;
  active: boolean;
}

function SearchResult({
  title,
  description,
  image,
  active
}: SearchResultProps) {
  return (
    <div className={`flex cursor-default select-none rounded-xl p-3 ${active ? "bg-gray-100" : "bg-white"}`}>
      <div className="flex h-10 w-10 flex-none items-center justify-center">
        <Image
          width={50}
          height={75}
          src={image}
          alt={title}
          className={`ml-2 mr-4 w-8 rounded-md`}
        />
      </div>
      <div className="ml-4 flex-auto">
        <p className="text-sm font-medium text-gray-700">
          {title}
        </p>
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SearchResult;