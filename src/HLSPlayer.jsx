// import { useEffect, useRef } from "react";
// import Hls from "hls.js";

// export default function HLSPlayer({ url }) {

//     const videoRef = useRef(null);

//     useEffect(() => {

//         const video = videoRef.current;

//         if (!video || !url) return;

//         let hls;

//         if (Hls.isSupported()) {

//             hls = new Hls();

//             hls.loadSource(url);
//             hls.attachMedia(video);

//             hls.on(Hls.Events.MANIFEST_PARSED, () => {
//                 console.log("✅ HLS manifest loaded:", url);
//                 // video.src = url
//             });

//             hls.on(Hls.Events.ERROR, (event, data) => {

//                 console.log("❌ HLS ERROR");
//                 console.log("Type:", data.type);
//                 console.log("Details:", data.details);
//                 console.log("Fatal:", data.fatal);
//                 console.log("URL:", data.url);
// // video.src = url
//             });

//         }

//         // Native HLS support (mainly Safari)
//         else if (
//             video.canPlayType("application/vnd.apple.mpegurl")
//         ) {

//             console.log("Using native HLS");

//             video.src = url;
//         }

//         return () => {

//             if (hls) {
//                 hls.destroy();
//             }

//         };

//     }, [url]);


//     return (
//         <video
//             ref={videoRef}
//             controls
//             autoPlay
//             muted
//             playsInline
//             title="You are watching Live Iptv"
//             width="600"
//         />


//         // <video
//         //     ref={videoRef}
//         //     controls
//         //    preload="none"
//         //     muted
            
            
//         //     width="600"
//         // />
//     );
// }











import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function HLSPlayer({ url }) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !url) {
      return;
    }

    // Destroy previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    console.log("🎬 Loading:", url);

    // =========================================
    // HLS.JS
    // =========================================

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,

        // Useful for live IPTV
        backBufferLength: 90,
      });

      hlsRef.current = hls;

      // Load stream
      const proxyUrl =
  "https://mynewiptv.netlify.app/.netlify/functions/hls?url=" +
  encodeURIComponent(url);

hls.loadSource(proxyUrl);
      hls.loadSource(url);

      // Attach to video
      hls.attachMedia(video);

      // Manifest loaded
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("✅ HLS manifest loaded");

        video.play().catch((error) => {
          console.log("Autoplay blocked:", error);
        });
      });

      // HLS errors
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("❌ HLS ERROR");
        console.error("Type:", data.type);
        console.error("Details:", data.details);
        console.error("Fatal:", data.fatal);
        console.error("URL:", data.url);

        // =====================================
        // Handle fatal errors
        // =====================================

        if (data.fatal) {
          switch (data.type) {

            case Hls.ErrorTypes.NETWORK_ERROR:

              console.log(
                "🔄 Network error - trying to recover..."
              );

              hls.startLoad();

              break;


            case Hls.ErrorTypes.MEDIA_ERROR:

              console.log(
                "🔄 Media error - trying to recover..."
              );

              hls.recoverMediaError();

              break;


            default:

              console.log(
                "❌ Fatal HLS error - destroying player"
              );

              hls.destroy();

              break;
          }
        }
      });
    }

    // =========================================
    // Native HLS
    // =========================================

    else if (
      video.canPlayType(
        "application/vnd.apple.mpegurl"
      )
    ) {
      console.log("🍎 Using native HLS");

      video.src = url;

      video.addEventListener(
        "loadedmetadata",
        () => {
          video.play().catch(() => {});
        }
      );
    }

    // =========================================
    // HLS NOT SUPPORTED
    // =========================================

    else {
      console.error(
        "❌ HLS is not supported by this browser"
      );
    }

    // =========================================
    // CLEANUP
    // =========================================

    return () => {
      console.log("🧹 Cleaning HLS player");

      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }

      video.pause();
      video.removeAttribute("src");
      video.load();
    };

  }, [url]);



   useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        // Prevent page scrolling
        event.preventDefault();

        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }

      
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);



  useEffect(() => {
  const video = videoRef.current;

  if (!video || !("mediaSession" in navigator)) return;

  navigator.mediaSession.setActionHandler("play", () => {
    video.play().catch(console.error);
  });

  navigator.mediaSession.setActionHandler("pause", () => {
    video.pause();
  });

  navigator.mediaSession.setActionHandler("nexttrack", () => {
    video.currentTime += 10;
  });

  navigator.mediaSession.setActionHandler("previoustrack", () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
  });

  return () => {
    ["play", "pause", "nexttrack", "previoustrack"].forEach(
      (action) => {
        try {
          navigator.mediaSession.setActionHandler(action, null);
        } catch {}
      }
    );
  };
}, []);


  return (
    <video
      ref={videoRef}
      controls
      preload="none"
      autoPlay

      muted
      playsInline
      title="You are watching Live IPTV"
      width="600px"
      style={{
        maxWidth: "100%",
        backgroundColor: "black",
    }}
    type='video/mpeg'
    />
  );
}
