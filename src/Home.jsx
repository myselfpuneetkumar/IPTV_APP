import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
// import Video from "./Video";
import defImage from "../public/play.png"
import Hls from "hls.js";






// alert("Please use GOOGLE Chrome or Firefox for better Experiencing \nThank You")
export default function Home({urls}) {
    const [channels, setChannels] = useState([]);
    const [channelLength, setChannelLengths] = useState(0);
    const [loading, setLoading] = useState(false);
    const [chName, setChName] = useState();
    const [indexVal, setIndexVal] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [seachingData, setSearchingData] = useState('')
    const [playControl, setPlayControl] = useState(true)
      const [showHomeLink, setShowHomeLink] = useState(false);
       const[sortData,setSortData] = useState([]);

    // consts [path,setPath] = useState('ok')
    // const[url,setUrl] = useState("http://192.168.183.30:3000/channels")
    // const[url,setUrl] = useState('https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/db.json')
    const [url,setUrl] = useState(localStorage.getItem('paths'));
        // localStorage.setItem('paths', 'http://localhost:3000/channels')

//     const [url, setUrl] = useState(
    // localStorage.getItem("url")
// );
    const videoref = useRef(null);
    let videoref2 = videoref;



    // const [videoData, setVideoData] = useState('https://amg00877-b4unew-amg00877c2-lg-in-5260.playouts.now.amagi.tv/playlist.m3u8')
    // const [videoData, setVideoData] = useState('../public/test.mp4')
    const [videoData, setVideoData] = useState('https://files.catbox.moe/j54cjt.mp4')
        // let localnPath = localPath;
        // const url = "http://localhost:3000/channels";
        // const url = "http://"+localPath+"/channels";
        // const url = "http://192.168.193.30:3000/channels"
        // const url = "https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/db.json"
    // let  url = url;
    // console.log('locALPATH',localPath);
    

    // useEffect(()=>{
    //     setUrl(localPath.toString());
    //     console.log("localPath is",localPath);
        
       
    //     console.log(url);
    //     channelList();
    // },[localPath])






//     const channelList = async () => {
//     try {
//         setLoading(false);

//         const response = await fetch(url);
//         const data = await response.json();
//         // data = data.channels

//         console.log(`data is new here ${data}`);
        

//         let channelData = [];

//         // Your old API format
//         if (Array.isArray(data)) {
//             channelData = data;
//         }
//        else if (Array.isArray(data)) {
//             // channelData = data
//             // setChannels(data);
//         }




        

//         // New LiveTV.json format
//         else if (data.channels) {

//             Object.entries(data.channels).forEach(
//                 ([category, channelList]) => {

//                     channelList.forEach((channel) => {

//                         channelData.push({
//                             name: channel.name,
//                             logo: channel.logo,
//                             category: category,
//                             type: "Free",
//                             link: channel.url
//                         });

//                     });

//                 }
//             );
//         }
//         else{
//           return(
//             <h1>ok</h1>
//           )
//         }

//         setChannels(channelData);
//         setChannelLengths(channelData.length);
//         setLoading(true);

//         // Start from first channel
//         setIndexVal(0);

//         if (channelData.length > 0) {
//             setVideoData(channelData[0].link);
//             setChName(channelData[0].name);
//         }

//     } catch (error) {
//         console.error("Error loading channels:", error);

//         setChannels([]);
//         setChannelLengths(0);
//         setLoading(false);
//     }
// };




// const channelList = async () => {
//   try {
//     setLoading(false);

//     const response = await fetch(url);

//     if (!response.ok) {
      

//        throw new Error(`HTTP Error: ${response.status}`);
//        console.log(`HTTP Error: ${response.status}`);
       
      
//     }

//     let data = await response.json();
    
    
    
//     // let reso = []
//     // reso = await data.channels;
//     // console.log(`data is ${reso}`);
    

//     let channelData = [];

//     // =====================================
//     // FORMAT 1 & 2
//     // Local JSON / Old Server
//     // =====================================
//     if (Array.isArray(data)) {
//       // data = data.channels
//       channelData = data.map((channel) => ({
//         id: channel.id,
//         name: channel.name,
//         logo: channel.logo,
//         category: channel.category,
//         type: channel.type,
//         link: channel.link
//       }));
//     }
//     else if (Array.isArray(data)) {
//       channelData = data.map((channel) => ({
//         id: channel.id,
//         name: channel.name,
//         logo: channel.logo,
//         category: channel.category,
//         type: channel.type,
//         link: channel.link
//       }));
//     }

//     // =====================================
//     // FORMAT 3
//     // LiveTV.json
//     // =====================================
//     else if (data) {
//       Object.entries(data.channels).forEach(
//         ([category, channelList]) => {

//           channelList.forEach((channel) => {

//             channelData.push({
//               id: channel.name,
//               name: channel.name,
//               logo: channel.logo,
//               category: category,
//               type: "Free",
//               link: channel.url
//             });

//           });

//         }
//       );
//     }
//     else{
//       return(
//         <h1>no data</h1>
//       )
//     }

//     console.log("Loaded channels:", channelData);

//     setChannels(channelData);
//     setChannelLengths(channelData.length);
//     setIndexVal(0);

//     // Automatically select first channel
//     if (channelData.length > 0) {
//       setVideoData(channelData[0].link);
//       setChName(channelData[0].name);
//     }

//     setLoading(true);

//   } catch (error) {

//     console.error("Error loading channels:", error);

//     setChannels([]);
//     setChannelLengths(0);
//     setVideoData("");
//     setChName("");

//     setLoading(false);
//   }
// };


// const channelList = async () => {

//     // localStorage.getItem('paths')
//     // if(!url){
//     //     return false
//     // }

//     // const channelList = async () => {
//     try {
//         setLoading(false);

//         const response = await fetch(url);
//         const data = await response.json();

//         const channelData = Array.isArray(data)
//             ? data
//             : data.channels || data.channels.news || [];

//         setChannels(channelData);
//         setChannelLengths(channelData.length);
//         setLoading(true);

//     } catch (error) {
//         console.error("Error loading channels:", error);
//         setChannels([]);
//         setChannelLengths(0);
//         setLoading(false);
//     }
// };




        // let response = await fetch(url);
        // console.log('home url',url);
        
        // response = await response.json();
        // setChannels(response);
        // setLoading(true);
        // console.log(response.length);
        // setChannelLengths(response.length)



        // console.log(len)






    const channelList = async () => {
        try {
            setLoading(false);

            const response = await fetch(url);

            // localStorage.getItem("url",url)

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            // data = data.channels
            let channelData = [];

            // Local / old / online db.json format
            if (Array.isArray(data)) {
                channelData = data.map((channel) => ({
                    id: channel.id ?? channel.name,
                    name: channel.name,
                    logo: channel.logo,
                    category: channel.category,
                    type: channel.type || "Free",
                    link: channel.link
                }));
            }

            else if (data.channels && Array.isArray(data.channels)) {
            channelData = data.channels;
        }

            // LiveTV.json format
            else if (data && data.channels) {
                Object.entries(data.channels).forEach(([category, list]) => {
                    if (!Array.isArray(list)) return;

                    list.forEach((channel) => {
                        channelData.push({
                            id: channel.name,
                            name: channel.name,
                            logo: channel.logo,
                            category: category,
                            type: "Free",
                            link: channel.url
                        });
                    });
                });
            }

            console.log("Loaded channels:", channelData);

            setChannels(channelData);
            localStorage.setItem('paths',url)
            setChannelLengths(channelData.length);
            setIndexVal(0);

            // Sorting the Response Array and store to SortData Array
            const sortingData = [...channelData].sort((a, b) =>
        a.name.localeCompare(b.name) );

    // setChannels(response);
    setSortData(sortingData);


            if (channelData.length > 0) {
                setVideoData(channelData[0].link);
                setChName(channelData[0].name);
            } else {
                setVideoData("");
                setChName("");
            }

            setLoading(true);
        } catch (error) {
            console.error("Error loading channels:", error);
            setChannels([]);
            setChannelLengths(0);
            setVideoData("");
            setChName("");
            setLoading(false);
        }
    };

    
    console.log(channels[indexVal])
    console.log(indexVal);

    function HLSPlayer() {

    // const videoRefs = useRef(null);
    
    const video = videoref.current;
    
    if (!video || !videoData) return;
    
    let hls;
    
    if (Hls.isSupported()) {
        
        hls = new Hls();
        
        hls.loadSource(videoData);
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

            video.src = videoData;
        }
        
        return () => {
            
            if (hls) {
                hls.destroy();
            }
            
        };
        
    }
            useEffect(() => {
                HLSPlayer();
        
    }, [videoData]);


    const changeUrl = ()=>{
       
        channelList();
        
    }

    const watchLive = (localPath, Name, index) => {
        setVideoData(localPath);
        setChName(Name)
        setIndexVal(index)
        // console.log(name)
        console.log(index)
        // channelList();
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
    // let filteredChannels = []
    const getSearchData = (event) => {
        // let searchData = event.target.value;
        // console.log(searchData);
        // setSearchingData(searchData);

    }
        
        // const filteredChannels = channels.filter((currChannel) => {
        const filteredChannels = sortData .filter((currChannel) => {
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
        //  let tempUrl = localStorage.getItem('paths')
        // setUrl(tempUrl)
        channelList();
        
    }, [url,localStorage.getItem("paths")])


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


    

    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowHomeLink(true);
      } else {
        setShowHomeLink(false);
      }
    };
//   useEffect(() => {
//     handleScroll();
// })

useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
    




    return (
        <>


            {/* <Video /> */}

              {showHomeLink && (
        <a
          href="#"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "transparent",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          <img src="nextplay.png" style={{height:'40px', width:'40px', transform:'rotate(270deg)'}} alt="" />
        </a>
      )}

      {/* <input type="text" onChange={(e)=>setUrl(e.target.value)} /> */}
{/* <select name="" id="" onChange={(e)=>setUrl(e.target.value)}>

      <option value="no">lo</option>
      <option value="http://localhost:3000/channels">local</option>
      {/* <option value="http://localhost:3000/">lowqwqwql</option> */}
      {/* <option value="http://localhost:3000/channels">loca</option>
      <option value="http://10.188.247.30:3000/channels">on</option>
      <option value="https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/db.json
">online</option>
      <option value="https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/db_old.json
">online2</option>
<option value="https://raw.githubusercontent.com/bugsfreeweb/LiveTVCollector/main/LiveTV/India/LiveTV.json">
    India Live TV
</option>
</select>  */}

{/* <button onclick={changeUrl}>ok</button> */}
            {
                // videoData.endsWith('.m3' || videoData.endsWith('.m3u8')) ?
                // videoData || videoData.endsWith('.m3u8')?
                    videoData ? 
                    <div className="vidControls">
                        {/* <video src={videoData ? videoData : null} controls autoPlay height="auto" width="auto" ref={videoref}> */}
                        {/* <video  controls autoPlay  height='800px' width="auto" ref={videoref}>
                        </video> */}
                        
                        <video src={videoData} controls autoPlay height={'800px'}  width="auto" ref={videoref}>
                        </video>

                        



                        <h2 style={{ margin: '1px' }}>{chName?chName:'Testing'} |  <span>CH-{indexVal+1}</span> <span>                                       
                             <button style={{ cursor:"pointer",height:'20px',width:'20px', backgroundColor:'transparent', border:'none'}} onClick={()=>copyPath(videoData)} > <img src={'./public/copy.jpg'} alt="copy" style={{ cursor:"pointer",height:'25px',width:'25px', marginTop:'20px'}} title="copy" /> </button></span> </h2> 
<div>
                            <button onClick={prevPlay}><img src="./public/prev.png" alt="" title="Previous Play"/></button>
                            <button onClick={pausePlay}>{playControl ? <img src="./public/play.png" alt="no image" title="Pause/Play"  /> : <img src="./public/pause.png" alt="" />}</button>

                            <button onClick={nextPlay}><img src="./public/nextplay.png" alt="" title="Play Next" /></button>

                        </div>
                    </div>


                    :
                    <div className="vidControls" >
                         <h2 style={{ margin: '10px' }}>{chName}</h2>
                        <h2>This Channel/Server is temporary out of service please select other one or try again later.....</h2>
                        <div>
                            <span>{indexVal}</span>
                            <button onClick={prevPlay}><img src="./public/prev.png" alt=""  title="Previous Play" /></button>
                            <button onClick={nextPlay}><img src="./public/nextplay.png" alt="" title="Play Next"/></button>
                        </div>
                    </div>

            }


            <div>



            </div>

 

             <div style={{ display: 'flex', justifyContent: 'space-around',display:"" }}  >
                <button className="btn"> <Link to="/addchannels">Add Channels</Link></button>
                <button className="btn"><Link to="/modify">Modify List</Link></button>
                 </div>
            {
                channelLength ? <h1>Total Available Channels:{channelLength}</h1> : <h1>Total Available Channels:{channelLength}</h1>
            }
           

            <input type="search" name="search" placeholder="Enter Channel Name,Category" className="searchChannels" onChange={(e)=>setSearchingData(e.target.value)} /><span><button className="sbtn" onClick={filteredChannels}>search</button></span>
            {
                loading ?

                    <div className="bannerList custom-scroll-container">
                        {
                            filteredChannels && filteredChannels.map((data, index) => {
                                return (
                                    <div className="banner ">
                                        <h2>{index+1}</h2>
                                        {
                                            // videoData == data.link? <img src={'./plays.gif'} alt="" onError={(e) => {e.target.src = defImage;}} height="100px" width="100px" /> :
                                            indexVal+1 == index+1 && videoData == data.link? <img src={'./plays.gif'} alt="" onError={(e) => {e.target.src = defImage;}} height="100px" width="100px" /> :
                                        
                                        <img src={data.logo || defImage} alt="" onError={(e) => {e.target.src = defImage;}} height="100px" width="100px" />
                            }
                                        <h2 key={index}> {data.name.length>16?data.name.slice(0,16)+"...":data.name}</h2>
                                        <h1 >Category :{data.category}</h1>
                                        <h1 >Type:{data.type}</h1>
                                        <button style={{ cursor:"pointer",backgroundColor:"transparent",border:"none"}}  onClick={()=>copyPath(data.link)} > <img src={'./public/copy.jpg'} alt="copy" height="18px" width="18px" title="copy link" /> </button>|
                                        <button style={{ cursor:"pointer",backgroundColor:"transparent",border:"none"}}>          <Link style={{color:"black"}}to={data.link} target="_blank"> <img src={'./public/next_page.png'} alt="copy" height="18px" width="18px" title="Watch  link in new tab" /></Link></button>
                               <br />
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


