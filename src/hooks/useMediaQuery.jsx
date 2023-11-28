// Custom React Hook called "useMediaQuery"
// It is used to check whether the current viewport size matches a specified media query
import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  // The useEffect hook is used to update the matches state variable whenever the viewport size changes.
  useEffect(() => {
    // The window.matchMedia() method is used to create a new media query object based on the input query
    // The matches property of the media query object (media.matches is a boolean which depends on the dims given by the query) is then compared to the current value of the matches state variable. If they are different, the setMatches() function is called to update the state variable with the new value.
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    // Next, an event listener is added to the window object to listen for changes to the viewport size. Whenever the size changes, the listener function is called, which updates the matches state variable using the setMatches() function.
    // Note : No {} for JS Arrow functions without any parameters
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  // Finally, the matches state variable is returned from the Hook.
  return matches;
};

export default useMediaQuery;
