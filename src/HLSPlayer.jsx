import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function HLSPlayer({ url }) {

    const videoRef = useRef(null);

    useEffect(() => {

        const video = videoRef.current;

        if (!video || !url) return;

        let hls;

        if (Hls.isSupported()) {

            hls = new Hls();

            hls.loadSource(url);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                console.log("✅ HLS manifest loaded:", url);
            });

            hls.on(Hls.Events.ERROR, (event, data) => {

                console.log("❌ HLS ERROR");
                console.log("Type:", data.type);
                console.log("Details:", data.details);
                console.log("Fatal:", data.fatal);
                console.log("URL:", data.url);

            });

        }

        // Native HLS support (mainly Safari)
        else if (
            video.canPlayType("application/vnd.apple.mpegurl")
        ) {

            console.log("Using native HLS");

            video.src = url;
        }

        return () => {

            if (hls) {
                hls.destroy();
            }

        };

    }, [url]);


    return (
        // <video
        //     ref={videoRef}
        //     controls
        //     autoPlay
        //     muted
        //     playsInline
        //     title="You are watching Live Iptv"
        //     width="600"
        // />


        <video
            ref={videoRef}
            controls
           preload="none"
            muted
            
            
            width="600"
        />
    );
}