import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';

function ProgressBar() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleEnd = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleEnd);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleEnd);
    };
  });
  
  return (
    <></>
  )  
} 

export default ProgressBar;