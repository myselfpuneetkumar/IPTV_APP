import { useEffect, useRef, useState } from "react";
import Card from "./Card";

export default function Category(){
                const[channels,setChannels] = useState([]);
                  const [videoData, setVideoData] = useState('../public/test.mp4')
                      const [playControl, setPlayControl] = useState(true)
                          const [indexVal, setIndexVal] = useState(0)
                          const [url,setUrl] = useState(localStorage.getItem('paths'));



                      const videoref = useRef(null);
            // const url = "http://localhost:3000/channels";
            
            // const url = "http://192.168.25.30:3000/channels";
            let filteredCategory = 'movies';
            
        //     const channelList = async () => {
        //         console.log(url);

        // let response = await fetch(url);
        // response = await response.json();
        // setChannels(response);
       


        const channelList = async () => {
        try {
            // setLoading(false);

            const response = await fetch(url);

            localStorage.getItem("url",url)

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
            // setChannelLengths(channelData.length);
            // setIndexVal(0);

            if (channelData.length > 0) {
                setVideoData(channelData[0].link);
                // setChName(channelData[0].name);
            } else {
                setVideoData("");
                // setChName("");
            }

            // setLoading(true);
        } catch (error) {
            console.error("Error loading channels:", error);
            setChannels([]);
            // setChannelLengths(0);
            setVideoData("");
            // setChName("");
            // setLoading(false);
        }
    };



        // console.log(len)
    
const prevPlay = () => {
        console.log('prev data')
        let index = indexVal - 1
        setVideoData(filteredChannels[index].link)
        setChName(filteredChannels[index].name)
        setIndexVal(index);


    }
   

     

    useEffect(()=>{
        // let newurl = localStorage.getItem('url')
        // let simple = newurl.toString();
        // setUrl(newurl);
        // console.log('data is',newurl);
        
        channelList();
    },[url])

       let filteredChannels = channels.filter((currChannel) => {
  const name = currChannel.name ? currChannel.name.toLowerCase() : "";
  const category = currChannel.category ? currChannel.category.toLowerCase() : "";
  return name.includes() || category.includes();
});
if(url.ok){
    return('no data')
}
    return(
        <>
        <div style={{width:'100%',backgroundColor:'yellow'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                    <h1>IPTV Categories</h1>
                     
                    <p style={{color:'black'}}>Now, Find your favourite Channels in a single Click....</p>


                    {/* {
                        filteredChannels.map((data)=>{
                            return(

                                <h1>{data.name}</h1>
                            )
                        })
                    } */}


                    {/* <Card channels={filteredChannels} /> */}
            </div>

                <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    Movies
                </summary>
                    <Card url={url} filteredCategory={'movies'}/>
                
            </details>
              <hr />
                <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    Musics
                </summary>
                    <Card url={url} filteredCategory={'music'} />
                
            </details>
              <hr />
                <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    News
                </summary>
                    <Card url={url} filteredCategory={'news'} />
                
            </details>
              <hr />
                <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    Kids
                </summary>
                    <Card url={url} filteredCategory={'kids'} />
                
            </details>
              <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    Entertainment
                </summary>
                    <Card url={url} filteredCategory={'entertainment'} />
                
            </details>
              <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    Comedy
                </summary>
                    <Card url={url} filteredCategory={'comedy'} />
                
            </details>
              <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    Education
                </summary>
                    <Card url={url} filteredCategory={'education'} />
                
            </details>
              <hr />
                <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    Sports
                </summary>
                    <Card url={url} filteredCategory={'sports'} />
                
            </details>
              <hr />
                <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    Culture
                </summary>
                    <Card url={url} filteredCategory={'culture'} />
                
            </details>
              <hr />
                <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    Religious
                </summary>
                    <Card url={url} filteredCategory={'religious'} />
                
            </details>
              <hr />
                <hr />
            <details style={{cursor:'pointer'}}>
                <summary>
                    Lifestyle
                </summary>
                    <Card url={url} filteredCategory={'lifestyle'} />
                
            </details>
              <hr />

        </div>
        </>
    )
}