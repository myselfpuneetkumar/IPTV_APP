import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './index.css'

import defImage from "../public/play.png"


export default function Card({ url,filteredCategory }) {
    const [channels, setChannels] = useState([]);
    
                  const [videoData, setVideoData] = useState('')
                      const [playControl, setPlayControl] = useState(true)
                          const [indexVal, setIndexVal] = useState(0)
                          const videoref = useRef (null);
                           const [chName, setChName] = useState('noName');
                          
// const url = "http://localhost:3000/channels";
// const url = "https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/db_old.json";
let newCategory = filteredCategory;
const channelList = async () => {


    let response = await fetch(url);
    if (!response.ok) {
                 throw new Error(`HTTP Error: ${response.status}`);
             }
  let data = await response.json();
  let channelData = [];


  if(Array.isArray(data)){

    //   setChannels(data);
    channelData = data;
  }

    else if (data.channels && Array.isArray(data.channels) ) {
            // channelData = data.channels;
            channelData = data.channels;
        }

    //   else if (Array.isArray(data)) {
    //             channelData = data.map((channel) => ({
    //                 id: channel.id ?? channel.name,
    //                 name: channel.name,
    //                 logo: channel.logo,
    //                 category: channel.category,
    //                 type: channel.type || "Free",
    //                 link: channel.link
    //             }));
    //         }
                  // LiveTV.json format
             else if (data && data.channels) {

                console.log('livetv',data);
                
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


            else{
                return true
            }

        setChannels(channelData);

  console.log(filteredCategory);
  




  // console.log(len)
}






// const channelList = async () => {
//         try {
//             // setLoading(false);

//             const response = await fetch(url);

//             // localStorage.getItem("url",url)
//             console.log(url);
            

//             if (!response.ok) {
//                 throw new Error(`HTTP Error: ${response.status}`);
//             }

//             const data = await response.json();
//             // data = data.channels
//             let channelData = [];

//             // Local / old / online db.json format
//             if (Array.isArray(data)) {
//                 channelData = data.map((channel) => ({
//                     id: channel.id ?? channel.name,
//                     name: channel.name,
//                     logo: channel.logo,
//                     category: channel.category,
//                     type: channel.type || "Free",
//                     link: channel.link
//                 }));
//             }

//             else if (data.channels && Array.isArray(data.channels)) {
//             channelData = data.channels;
//         }

//             // LiveTV.json format
//             else if (data && data.channels) {
//                 Object.entries(data.channels).forEach(([category, list]) => {
//                     if (!Array.isArray(list)) return;

//                     list.forEach((channel) => {
//                         channelData.push({
//                             id: channel.name,
//                             name: channel.name,
//                             logo: channel.logo,
//                             category: category,
//                             type: "Free",
//                             link: channel.url
//                         });
//                     });
//                 });
//             }

//             console.log("Loaded channels:", channelData);

//             setChannels(channelData);
//             localStorage.setItem('paths',url)
//             // setChannelLengths(channelData.length);
//             // setIndexVal(0);

//             if (channelData.length > 0) {
//                 setVideoData(channelData[0].link);
//                 setChName(channelData[0].name);
//             } else {
//                 setVideoData("");
//                 setChName("");
//             }

//             // setLoading(true);
//         } catch (error) {
//             console.error("Error loading channels:", error);
//             setChannels([]);
//             // setChannelLengths(0);
//             setVideoData("");
//             setChName("");
//             // setLoading(false);
//         }
//     };


useEffect(() => {
  channelList();
}, [url])

 const nextPlay = () => {
        console.log('prev data')
        let index = indexVal + 1
        setVideoData(filteredChannels[index].link)
        setChName(filteredChannels[index].name)
        setIndexVal(index);
                console.log(url);

    }
     function pausePlay() {
        setPlayControl(!playControl);
        if (playControl) {
            videoref.current.play();
        }
        else {
            videoref.current.pause();
        }
    }
    const prevPlay = () => {
        console.log('prev data')
        let index = indexVal - 1
        setVideoData(filteredChannels[index].link)
        setChName(filteredChannels[index].name)
        setIndexVal(index);


    }

const watchLive = (localPath, Name, index) => {
        setVideoData(localPath);
        
        setIndexVal(index)
        // console.log(name)
        setChName(Name)
        console.log(index)
        console.log('-----------------------------------');
        
        let cardcolor =  document.getElementsById('#cardVideo')
        cardcolor.style.backgroundColor='blue';
        // channelList();
    }

let filteredChannels = channels.filter((currChannel) => {
  const name = currChannel.name ? currChannel.name.toLowerCase() : "";
  const category = currChannel.category ? currChannel.category.toLowerCase() : "";
  return category.includes(filteredCategory);
});
    return (



    <>
        

<div style={{border:'2px solid black',margin:'0px'}}>
<div className="cardVideo" >
    <h1 style={{position:'sticky',top:'60px'}}>{filteredCategory.toUpperCase()}</h1>
    

 {
                // videoData.endsWith('.m3' || videoData.endsWith('.m3u8')) ?
                videoData ?
                    // videoData ? 
                    <div className="vidControls" >
                        {/* <video src={videoData ? videoData : null} controls autoPlay height="auto" width="auto" ref={videoref}> */}
                        <video src={videoData} controls autoPlay height="auto" width="auto" ref={videoref}>
                        </video>



                        <h2 style={{ margin: '1px' }}><span>{chName}</span><span> CH-{indexVal + 1}</span> <span>                                       
                             <button style={{ cursor:"pointer",height:'20px',width:'20px', backgroundColor:'transparent', border:'none'}} onClick={()=>copyPath(videoData)} > <img src={'./public/copy.jpg'} alt="copy" style={{ cursor:"pointer",height:'25px',width:'25px', marginTop:'20px'}} title="copy" /> </button></span> </h2> 
<div>
                            <button onClick={prevPlay}><img src="./public/prev.png" alt="" title="Previous Play"/></button>
                            <button onClick={pausePlay}>{playControl ? <img src="./public/play.png" alt="no image" title="Pause/Play"  /> : <img src="./public/pause.png" alt="" />}</button>

                            <button onClick={nextPlay}><img src="./public/nextplay.png" alt="" title="Play Next" /></button>

                        </div>
                    </div>


                    :
                    <div className="vidControls" style={{display:'none'}}>
                         <h2 style={{ margin: '10px' }}>{chName}</h2>
                        <h2>This Channel is temporary out of service please select other one</h2>
                        <div>
                            <span>{indexVal}</span>
                            <button onClick={prevPlay}><img src="./public/prev.png" alt=""  title="Previous Play" /></button>
                            <button onClick={nextPlay}><img src="./public/nextplay.png" alt="" title="Play Next"/></button>
                        </div>
                    </div>

            }
    
    </div>
 <div className="bannerList" >
         {
   
                            filteredChannels && filteredChannels.map((data, index) => {
                                return (
                                    <div className="banner">
                                        <h2>{index+1}</h2>
                                        <img src={data.logo || defImage} onError={(e) => {e.target.src = defImage;}} alt="banner"  height="100px" width="100px" />
                                        <h1 key={index}> {data.name}</h1>
                                        <h2>Category:{data.category}</h2>
                                        <h2>Type:<br />{data.type}</h2>
                                        <button style={{ cursor:"pointer",backgroundColor:"transparent",border:"none"}}>          <Link style={{color:"black"}}to={data.link} target="_blank"> <img src={'./public/next_page.png'} alt="copy" height="18px" width="18px" title="Watch  link in new tab" /></Link></button>
                          <button onClick={() => watchLive(data.link, data.name, index)}><img src={"public/Live.jpg"} alt="NO Image" height="auto" width="50px" title="Click to watch Live" /></button>


                                    </div>
                                    

                                )
                            })
                        }
                        </div>
                        </div>

    </>
    )
}