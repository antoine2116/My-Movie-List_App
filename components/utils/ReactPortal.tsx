import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ReactPortalProps {
  children: React.ReactNode;
}

function ReactPortal({
  children
} : ReactPortalProps) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(
    children,
    document.getElementById("portal") ?? document.createElement("div")
  ) : null;
}

export default ReactPortal;