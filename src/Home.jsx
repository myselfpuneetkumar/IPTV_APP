import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import Video from "./Video";

// alert("Please use GOOGLE Chrome or Firefox for better Experiencing \nThank You")
export default function Home() {
    const [channels, setChannels] = useState([]);
    const [channelLength, setChannelLengths] = useState(0);
    const [loading, setLoading] = useState(false);
    const [chName, setChName] = useState();
    const [indexVal, setIndexVal] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoref = useRef(null);


    const [videoData, setVideoData] = useState('https://amg00877-b4unew-amg00877c2-lg-in-5260.playouts.now.amagi.tv/playlist.m3u8')

    const url = "http://localhost:3000/channels";


    const channelList = async () => {

        let response = await fetch(url);
        response = await response.json();
        setChannels(response);
        setLoading(true);
        console.log(response.length);
        setChannelLengths(response.length)



        // console.log(len)
    }
    console.log(channels[indexVal])
    console.log(indexVal);

    const watchLive = (path, Name, index) => {
        setVideoData(path);
        setChName(Name)
        setIndexVal(index)
        console.log(name)
        console.log(index)
        channelList();
    }
    //Prev Play
    const prevPlay = () => {
        console.log('prev data')
        let index = indexVal - 1
        setVideoData(channels[index].link)
        setChName(channels[index].name)
        setIndexVal(index);

    }
    const nextPlay = () => {
        console.log('prev data')
        let index = indexVal + 1
        setVideoData(channels[index].link)
        setChName(channels[index].name)
        setIndexVal(index);

    }
    useEffect(() => {
        channelList();
    }, [])





    return (
        <>


            {/* <Video /> */}
            {
                videoData.endsWith('.m3u8')? <div>
                <video src={videoData ? videoData : null} controls autoPlay height="400px" width="auto" ref={videoref}>
                                <button onClick={()=>videoref.current.requestFullscreen()}>Play</button></video>
                                </div>

                : <h2>This Channel is temporary out of service please select other one</h2>

            
            }

                <h2 >{chName}</h2>
                <div className="vidControls">
                    <button onClick={prevPlay}>{'<<'}</button>
                    <button onClick={()=>videoref.current.pause()}>Pause</button>
                    <button onClick={()=>videoref.current.play()}>Play</button>
                    
                    <button onClick={nextPlay}>{'>>'}</button>
                </div>


                 <div>
                    
     
    
    </div>
            
            
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button className="btn"> <Link to="/addchannels">Add Channels</Link></button>
                <button className="btn"><Link to="/modify">Modify List</Link></button></div>
            {
                channelLength ? <h1>Total Available Channels:{channelLength}</h1> : <h1>Total Available Channels:{channelLength}</h1>
            }
            {
                loading ?

                    <div className="bannerList">
                        {
                            channels && channels.map((data, index) => {
                                return (
                                    <div className="banner">
                                        <h5>{index}</h5>
                                        <img src={data.logo} alt="NO Image" height="100px" width="100px" />
                                        <h1 key={index}> {data.name}</h1>
                                        <h2>Category :{data.category}</h2>
                                        <h2>Type:{data.type}</h2>
                                        <Link to={data.link} target="_blank">WATCH now</Link><br />
                                        <button onClick={() => watchLive(data.link, data.name, index)}><img src={"public/Live.jpg"} alt="NO Image" height="auto" width="50px" title="Click to watch Live" /></button>

                                    </div>

                                )
                            })
                        }
                    </div>
                    : <h1>Unable to connect with server try again later</h1>
            }
        </>
    )
}


