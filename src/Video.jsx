        
        import '@videojs/react/video/neutral-skin.css';
        import { VideoPlayer, NeutralVideoSkin } from '@videojs/react/video';
        import { HlsJsVideo } from '@videojs/react/media/hlsjs-video';
// import { VideoPlayer, NeutralVideoSkin, Video } from '@videojs/react/video';
            // import '@videojs/react/video/neutral-skin.css';
export default function Video(){
    return(
        <>
        <h1>
            this is video
        </h1>

        {/* <video src="https://amg00877-b4unew-amg00877c2-lg-in-5260.playouts.now.amagi.tv/playlist.m3u8" controls></video> */}

    <VideoPlayer>
      <NeutralVideoSkin style={{ width: '100%', aspectRatio: '16 / 9' }}>
        <HlsJsVideo src={"http://202.70.146.135:8000/play/a02a/index.m3u8"} playsInline />
      </NeutralVideoSkin>
    </VideoPlayer>
        </>


    )
}

