import { useState, useEffect } from "react";

/**
 * React hook for detecting media query matches.
 *
 * @param query The media query string (e.g., '(min-width: 768px)').
 * @returns A boolean indicating whether the media query matches.  Returns `undefined`
 * if the browser doesn't support media queries or if the hook is used
 * on the server.
 */
function useMediaQuery(query: string): boolean | undefined {
  const [matches, setMatches] = useState<boolean | undefined>(() => {
    // Initial check in case the media query matches on initial render.
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return undefined; // Handle server-side rendering
  });

  useEffect(() => {
    // Ensure we're in a browser environment.
    if (typeof window === "undefined") {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    // Function to handle changes to the media query.
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener for changes to the media query.  Use addEventListener for wider browser support
    mediaQueryList.addEventListener("change", handleChange);

    // Clean up the listener when the component unmounts.
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]); // Dependency on the query string.  Rerun effect if query changes

  return matches;
}

export default useMediaQuery;
