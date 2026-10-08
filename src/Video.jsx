import { useEffect, useRef } from "react";
import Hls from "hls.js";

import '@videojs/react/video/neutral-skin.css';
import { VideoPlayer, NeutralVideoSkin } from '@videojs/react/video';
import { HlsJsVideo } from '@videojs/react/media/hlsjs-video';





// import { VideoPlayer, NeutralVideoSkin, Video } from '@videojs/react/video';
// import '@videojs/react/video/neutral-skin.css';
export default function Video(){
    // let url =  "http://51.75.127.199:3141/andxplorehd/index.m3u8"
    const url =
"https://mynewiptv.netlify.app/.netlify/functions/hls?url=" +
encodeURIComponent(
"http://51.75.127.199:3141/andxplorehd/index.m3u8"
);
    const videoRef = useRef(null);
      useEffect(() => {

        const video = videoRef.current;

        if (!video || !url) return;

        let hls;



// hls.loadSource(proxyUrl);

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
            }, [url]);
    return(
        <>
        <h1>
            this is video
        </h1>

        {/* <video src="https://amg00877-b4unew-amg00877c2-lg-in-5260.playouts.now.amagi.tv/playlist.m3u8" controls></video> */}

    {/* <VideoPlayer>
      <NeutralVideoSkin style={{ width: '100%', aspectRatio: '16 / 9' }}>
        <HlsJsVideo src={"http://51.75.127.199:3141/andxplorehd/index.m3u8"} playsInline />
      </NeutralVideoSkin>
    </VideoPlayer> */}
video
    <video  height='100px' width='400px' controls poster={'/logo.png'}>
    <source src="http://51.75.127.199:3141/andxplorehd/index.m3u8"  /></video>

     <video
            ref={videoRef}
            controls
            autoPlay
            muted
            playsInline
            title="You are watching Live Iptv"
            width="600"
        />
        </>

      




    
       

    )
}

