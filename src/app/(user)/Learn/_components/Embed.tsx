const getYouTubeEmbedUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname === "youtu.be") {
      // Untuk URL pendek youtu.be
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
    } else if (parsedUrl.hostname.includes("youtube.com")) {
      // Untuk URL youtube.com
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
    return null;
  } catch {
    return null;
  }
};

export default function EmbedYouTube ({ link }: { link: string }) {
    const embedUrl = getYouTubeEmbedUrl(link);
  
    if (!embedUrl) {
      return <p>Invalid YouTube link</p>;
    }
  
    return (
      <iframe
        className="w-full aspect-video"
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-scripts allow-modals allow-popups allow-presentation allow-same-origin"
        allowFullScreen
      ></iframe>
    );
  };
  