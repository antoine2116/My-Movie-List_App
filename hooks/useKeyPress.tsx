import { useCallback, useEffect } from "react";

export const useKeyPress = (key: string, callback: () => void) => {
  const handle = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === key) {
        callback();
      }
    },
    [callback, key]
  );

  useEffect(() => {
    window.addEventListener("keydown", handle);
    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, [handle]);
};

export const useKeyPressShortcut = (key: string, callback: () => void) => {
  const handle = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === key && e.ctrlKey) {
        e.preventDefault();
        callback();
      }
    },
    [callback, key]
  );

  useEffect(() => {
    window.addEventListener("keydown", handle);
    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, [handle]);
};
