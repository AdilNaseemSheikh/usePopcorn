import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    const callback = function (e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
        console.log("closing");
      }
    };
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
}
