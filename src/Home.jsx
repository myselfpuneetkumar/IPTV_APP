import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
// import Video from "./Video";
import defImage from "../public/play.png"

// alert("Please use GOOGLE Chrome or Firefox for better Experiencing \nThank You")
export default function Home({localPath}) {
    const [channels, setChannels] = useState([]);
    const [channelLength, setChannelLengths] = useState(0);
    const [loading, setLoading] = useState(false);
    const [chName, setChName] = useState();
    const [indexVal, setIndexVal] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [seachingData, setSearchingData] = useState('')
    const [playControl, setPlayControl] = useState(true)
    // const [path,setPath] = useState('ok')
    // const[url,setUrl] = useState("http://192.168.183.30:3000/channels")
    const videoref = useRef(null);



    // const [videoData, setVideoData] = useState('https://amg00877-b4unew-amg00877c2-lg-in-5260.playouts.now.amagi.tv/playlist.m3u8')
    const [videoData, setVideoData] = useState('../public/test.mp4')
        // let localnPath = localPath;
        const url = "http://localhost:3000/channels";
        // const url = "http://"+localPath+"/channels";
        // const url = "http://192.168.183.30:3000/channels"
        // const url = "https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/db.json"
    // let  url = localPath;

    // useEffect(()=>{
    //     setUrl(localPath.toString());
    //     console.log("localPath is",localPath);
        
       
    //     console.log(url);
    //     channelList();
    // },[localPath])


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

    const watchLive = (localPath, Name, index) => {
        setVideoData(localPath);
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
        setVideoData(filteredChannels[index].link)
        setChName(filteredChannels[index].name)
        setIndexVal(index);


    }
    const nextPlay = () => {
        console.log('prev data')
        let index = indexVal + 1
        setVideoData(filteredChannels[index].link)
        setChName(filteredChannels[index].name)
        setIndexVal(index);
                console.log(url);


    }
    const getSearchData = (event) => {
        let searchData = event.target.value;
        console.log(searchData);
        setSearchingData(searchData);

    }

   let filteredChannels = channels.filter((currChannel) => {
  const name = currChannel.name ? currChannel.name.toLowerCase() : "";
  const category = currChannel.category ? currChannel.category.toLowerCase() : "";
  return name.includes(seachingData.toLowerCase()) || category.includes(seachingData.toLowerCase());
});


    function pausePlay() {
        setPlayControl(!playControl);
        if (playControl) {
            videoref.current.play();
        }
        else {
            videoref.current.pause();
        }
    }


    useEffect(() => {
        channelList();
    }, [])


    const copyPath = async(e)=>{
        
        // setPath(e.target.value);
        try {
            await navigator.clipboard.writeText(e)
            console.log(e);
            alert('Video URL copied to Clipboard');
            
        } catch (error) {
            console.log("failed to copy",error)
            
        }
    }




    return (
        <>


            {/* <Video /> */}
            {
                // videoData.endsWith('.m3' || videoData.endsWith('.m3u8')) ?
                videoData ?
                    // videoData ? 
                    <div className="vidControls">
                        {/* <video src={videoData ? videoData : null} controls autoPlay height="auto" width="auto" ref={videoref}> */}
                        <video src={videoData} controls autoPlay height="auto" width="auto" ref={videoref}>
                        </video>



                        <h2 style={{ margin: '10px' }}>{chName} <span>CH-{indexVal + 1}</span></h2><div>
                            <button onClick={prevPlay}><img src="./public/prev.png" alt="" title="Previous Play"/></button>
                            <button onClick={pausePlay}>{playControl ? <img src="./public/play.png" alt="no image" title="Pause/Play"  /> : <img src="./public/pause.png" alt="" />}</button>

                            <button onClick={nextPlay}><img src="./public/nextplay.png" alt="" title="Play Next" /></button>

                        </div>
                    </div>


                    :
                    <div className="vidControls">
                         <h2 style={{ margin: '10px' }}>{chName}</h2>
                        <h2>This Channel is temporary out of service please select other one</h2>
                        <div>
                            <span>{indexVal}</span>
                            <button onClick={prevPlay}><img src="./public/prev.png" alt=""  title="Previous Play" /></button>
                            <button onClick={nextPlay}><img src="./public/nextplay.png" alt="" title="Play Next"/></button>
                        </div>
                    </div>

            }


            <div>



            </div>


             <div style={{ display: 'flex', justifyContent: 'space-around' }} className="midHero" className="min-h-screen bg-gray-950 text-white">
                <button className="btn"> <Link to="/addchannels">Add Channels</Link></button>
                <button className="btn"><Link to="/modify">Modify List</Link></button>
                 </div>/ 
            {
                channelLength ? <h1>Total Available Channels:{channelLength}</h1> : <h1>Total Available Channels:{channelLength}</h1>
            }
           

            <input type="search" name="search" placeholder="Enter Channel Name,Category" className="searchChannels" onChange={getSearchData} /><span><button className="sbtn" onClick={getSearchData}>search</button></span>
            {
                loading ?

                    <div className="bannerList">
                        {
                            filteredChannels && filteredChannels.map((data, index) => {
                                return (
                                    <div className="banner">
                                        <h2>{index+1}</h2>
                                        <img src={data.logo || defImage} alt="" onError={(e) => {e.target.src = defImage;}} height="100px" width="100px" />
                                        <h1 key={index}> {data.name}</h1>
                                        <h2>Category :{data.category}</h2>
                                        <h2>Type:<br />{data.type}</h2>
                                        <button style={{ margin:"2px"}}onClick={()=>copyPath(data.link)}>Copy </button> | 
                                        <Link style={{color:"black"}}to={data.link} target="_blank"> WATCH now</Link><br />
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


