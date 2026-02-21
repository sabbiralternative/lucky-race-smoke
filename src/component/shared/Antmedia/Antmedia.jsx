import { WebPlayer } from "@antmedia/web_player";
import { useEffect, useRef } from "react";

const AntMedia = ({ server, height = "200px" }) => {
  const bigVideo = useRef(null);
  const embeddedPlayerRef = useRef(null);

  useEffect(() => {
    if (!server?.streamKey || !server?.serverLink || !bigVideo.current) return;

    const playOrderLocal = ["webrtc", "hls", "dash"];

    embeddedPlayerRef.current = new WebPlayer(
      {
        streamId: server.streamKey,
        httpBaseURL: server.serverLink,
        videoHTMLContent:
          '<video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered" playsinline autoplay style="width:100%;height:100%;object-fit:cover"></video>',
        playOrder: playOrderLocal,
      },
      bigVideo.current
    );

    embeddedPlayerRef.current
      .initialize()
      .then(() => {
        embeddedPlayerRef.current.play();
      })
      .catch((error) => {
        console.error("Error while initializing embedded player:", error);
      });

    // ✅ Proper cleanup
    return () => {
      if (embeddedPlayerRef.current) {
        try {
          embeddedPlayerRef.current.destroy();
        } catch (err) {
          console.warn("Error destroying player:", err);
        }
        embeddedPlayerRef.current = null;
      }
    };
  }, [server?.streamKey, server?.serverLink]);

  return (
    <div
      id="video-container"
      style={{
        width: "100%",
        height,
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
      }}
      ref={bigVideo}
    ></div>
  );
};

export default AntMedia;
