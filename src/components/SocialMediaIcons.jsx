const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/auger-michael/"
        target="_blank"
        rel="noreferrer" // For older browsers (potential security issues)
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/ByronMike/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/ByronMike_"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://open.spotify.com/playlist/2bTY4IUI6BEcOU1GmLlLrP"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="spotify-link" src="../assets/spotify.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
