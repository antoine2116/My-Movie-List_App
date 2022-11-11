import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  borderWidth: "4px"
}

function Spinner() {
  return (
    <div className="flex justify-center w-full my-4">
      <ClipLoader
        color={"#2590EB"}
        cssOverride={override}
        loading={true}
        size={50}
      />
    </div>
  )
}

export default Spinner;