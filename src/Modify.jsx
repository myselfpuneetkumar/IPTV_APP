// import { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Hls from "hls.js";

// export default function Modify() {
//     const [channels, setChannels] = useState([]);
//     const navigate = useNavigate();
//         const [status, setStatus] = useState({});

//     const url = "http://localhost:3000/channels/";

//     // Get channels
//     const channelList = async () => {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();

//             setChannels(data);
//         } catch (error) {
//             console.error("Error fetching channels:", error);
//             setChannels([]);
//         }
//     };

//     useEffect(() => {
//         channelList();
//     }, []);

//     // Delete channel
//     const deleteData = async (id) => {
//         try {
//             await fetch(url + id, {
//                 method: "DELETE",
//             });

//             alert("Deleted");

//             // Refresh channel list
//             channelList();
//         } catch (error) {
//             console.error("Delete error:", error);
//         }
//     };

//     // Edit channel
//     const editData = (id) => {
//         navigate("/edit/" + id);
//     };


//         const getStatus = (id) => {

//         const currentStatus = status[id];

//         if (currentStatus === "working") {
//             return (
//                 <span style={{ color: "green", fontWeight: "bold" }}>
//                     🟢 Working
//                 </span>
//             );
//         }

//         if (currentStatus === "broken") {
//             return (
//                 <span style={{ color: "red", fontWeight: "bold" }}>
//                     🔴 Broken
//                 </span>
//             );
//         }

//         return (
//             <span style={{ color: "orange", fontWeight: "bold" }}>
//                 🟡 Checking...
//             </span>
//         );
//     };

//     return (
//         <>
//             <h1>Channel List</h1>

//             <button className="btn">
//                 <Link to="/">Back to Home</Link>
//             </button>

//             {channels.length > 0 ? (
//                 <table border="2">
//                     <thead>
//                         <tr>
//                             <th>Ch.NO</th>
//                             <th>Name</th>
//                             <th>Video</th>
//                             <th>Actions</th>
//                             <th>Link</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {channels.map((data, index) => (
//                             <tr key={data.id}>

//                                 <td>
//                                     {index + 1}
//                                 </td>

//                                 <td>
//                                     {data.name}
//                                 </td>

//                                 <td>
//                                     <HLSVideo src={data.link} />
//                                 </td>
//                                 <td>
//                               {getStatus(data.id)}
//                      </td>

//                                 <td>
//                                     <button
//                                         onClick={() =>
//                                             deleteData(data.id)
//                                         }
//                                         style={{
//                                             color: "red",
//                                         }}
//                                     >
//                                         Delete
//                                     </button>

//                                     <button
//                                         onClick={() =>
//                                             editData(data.id)
//                                         }
//                                     >
//                                         Edit
//                                     </button>
//                                 </td>

//                                 <td>
//                                     {data.link}
//                                 </td>

//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <h1>
//                     Unable to connect with server. Try again later.
//                 </h1>
//             )}
//         </>
//     );
// }


// =============================
// HLS VIDEO COMPONENT
// =============================

// function HLSVideo({ src }) {

//     const videoRef = useRef(null);

//     useEffect(() => {

//         const video = videoRef.current;

//         if (!video || !src) {
//             return;
//         }

//         let hls;

//         // Check if browser supports hls.js
//         if (Hls.isSupported()) {

//             hls = new Hls();

//             // Load .m3u8 URL
//             hls.loadSource(src);

//             // Attach HLS to video element
//             hls.attachMedia(video);

//             hls.on(Hls.Events.MANIFEST_PARSED, () => {
//                 console.log("HLS loaded:", src);
//             });

//             hls.on(Hls.Events.ERROR, (event, data) => {
//                 console.error("HLS error:", data);
//             });

//         }

//         // Safari supports HLS natively
//         else if (
//             video.canPlayType(
//                 "application/vnd.apple.mpegurl"
//             )
//         ) {

//             video.src = src;

//         }

//         // Cleanup
//         return () => {

//             if (hls) {
//                 hls.destroy();
//             }

//         };

//     }, [src]);


//     return (
//         <video
//             ref={videoRef}
//             controls
//             preload="none"
//             width="300"
//             height="200"
//         />
//     );
// }

























//old_code

// import { useEffect, useState } from "react"
// import { Link, useNavigate } from "react-router-dom";

// export default function Modify() {
//     const [channels, setChannels] = useState('');
//     let count = 1;
//     const navigate = useNavigate();

// //  const [url,setUrl] = useState(localStorage.getItem('paths'));
//     const url = "http://localhost:3000/channels/";
//             // const url = "http://192.168.193.30:3000/channels"


//     const channelList = async () => {

//         let response = await fetch(url);
//         response = await response.json();
//         setChannels(response);
//     }
//     useEffect(() => {
//         channelList();
//     }, [])

//     // https://files.catbox.moe/j54cjt.mp4
//     const deleteData = async(id)=>{
//         let response = fetch(url+id,{
//             method:'delete',
//             // body:JSON.stringify()
//         })
//         // response = await response.json();
//         await alert('deleted')
//         channelList();
//         // console.log(id)

//     }
//     const editData = (id)=>{
//         navigate('/edit/'+id)
//     }

//     return (
//         <>
//             <h1> Channel List</h1>
//              <button className="btn"><Link to="/">Back to Home</Link></button>


//             {
//                     channels? <table border="2px solid black">
//                 <tr><th>Ch.NO</th>
//                     <th>Name</th>
//                     <th>category</th>
//                     <th>Logo</th>
//                     <th>type</th>
//                     <th>Link</th>
//                     <th>Actions</th>
//                 </tr>



//                 {

//                     channels && channels.map((data,index) => {
//                         return (

//                                <tr>
//                                     <td>{count++}</td>
//                                     <td>{data.name}</td>
//                                     {/* <td>{data.category}</td> */}
//                                     {/* <td><img src={data.logo} alt="" height='50px' width='50px'/></td> */}
//                                     {/* <td max={10}>{data.logo}</td> */}
//                                    <td>
//     <video
//         src={data.link}
//         controls
//         preload="none"
//         width="300"
//         height="200"
//     />
// </td>
//                                     {/* <td >{data.type}</td> */}
//                                     {/* <td >{data.name}</td> */}
//                                     <td>
//                                         <button onClick={()=>deleteData(data.id)} style={{color:'red'}}>Delete</button>
//                                         <button onClick={()=>editData(data.id)}>Edit</button>
//                                     </td>
//                                     <td>{data.link}</td>

//                                 </tr> 


//                                 )
//                             }
//                         )
//                 }
//                 </table>
//                 : <h1>Unable to connect with server try again later</h1>
//             }

//         </>
//     )
// }





//new with the hls check



// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Hls from "hls.js";

// export default function Modify() {
//     const [channels, setChannels] = useState([]);
//     const [status, setStatus] = useState({});

//     const navigate = useNavigate();

//     // const url = "http://localhost:3000/channels/";

//         const [url,setUrl] = useState(localStorage.getItem('paths'));


//     // Get channels from JSON Server
//     const channelList = async () => {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();

//             setChannels(data);

//             // Start checking all links
//             checkAllLinks(data);

//         } catch (error) {
//             console.error("Error fetching channels:", error);
//         }
//     };

//     useEffect(() => {
//         channelList();
//     }, []);

//     // --------------------------------
//     // CHECK ALL CHANNEL LINKS
//     // --------------------------------

//     const checkAllLinks = (channelData) => {

//         channelData.forEach((channel) => {

//             // Initially checking
//             setStatus((prev) => ({
//                 ...prev,
//                 [channel.id]: "checking"
//             }));

//             checkLink(channel);

//         });
//     };


//     // --------------------------------
//     // CHECK ONE LINK
//     // --------------------------------

//     const checkLink = (channel) => {

//         const streamUrl = channel.link;

//         if (!streamUrl) {

//             setStatus((prev) => ({
//                 ...prev,
//                 [channel.id]: "broken"
//             }));

//             return;
//         }


//         // --------------------------------
//         // HLS (.m3u8)
//         // --------------------------------

//         if (
//             streamUrl.includes(".m3u8") &&
//             Hls.isSupported()
//         ) {

//             const video = document.createElement("video");

//             const hls = new Hls({
//                 enableWorker: true,
//                 lowLatencyMode: false,
//             });

//             let finished = false;

//             // Give the stream some time
//             const timeout = setTimeout(() => {

//                 if (!finished) {

//                     finished = true;

//                     setStatus((prev) => ({
//                         ...prev,
//                         [channel.id]: "broken"
//                     }));

//                     hls.destroy();
//                 }

//             }, 10000);


//             // Manifest successfully loaded
//             hls.on(Hls.Events.MANIFEST_PARSED, () => {

//                 if (finished) return;

//                 finished = true;

//                 clearTimeout(timeout);

//                 setStatus((prev) => ({
//                     ...prev,
//                     [channel.id]: "working"
//                 }));

//                 hls.destroy();
//             });


//             // HLS error
//             hls.on(Hls.Events.ERROR, (event, data) => {

//                 if (finished) return;

//                 // Fatal error = broken stream
//                 if (data.fatal) {

//                     finished = true;

//                     clearTimeout(timeout);

//                     setStatus((prev) => ({
//                         ...prev,
//                         [channel.id]: "broken"
//                     }));

//                     hls.destroy();
//                 }

//             });


//             hls.loadSource(streamUrl);
//             hls.attachMedia(video);

//         }

//         // --------------------------------
//         // Normal HTTP/HTTPS URL
//         // --------------------------------

//         else {

//             fetch(streamUrl, {
//                 method: "HEAD"
//             })
//                 .then((response) => {

//                     if (response.ok) {

//                         setStatus((prev) => ({
//                             ...prev,
//                             [channel.id]: "working"
//                         }));

//                     } else {

//                         setStatus((prev) => ({
//                             ...prev,
//                             [channel.id]: "broken"
//                         }));

//                     }

//                 })
//                 .catch(() => {

//                     setStatus((prev) => ({
//                         ...prev,
//                         [channel.id]: "broken"
//                     }));

//                 });

//         }
//     };


//     // --------------------------------
//     // DELETE
//     // --------------------------------

//     const deleteData = async (id) => {

//         try {

//             await fetch(url + id, {
//                 method: "DELETE"
//             });

//             alert("Deleted");

//             channelList();

//         } catch (error) {

//             console.error(error);

//         }

//     };


//     // --------------------------------
//     // EDIT
//     // --------------------------------

//     const editData = (id) => {

//         navigate("/edit/" + id);

//     };


//     // --------------------------------
//     // STATUS DISPLAY
//     // --------------------------------

//     const getStatus = (id) => {

//         const currentStatus = status[id];

//         if (currentStatus === "working") {
//             return (
//                 <span style={{ color: "green", fontWeight: "bold" }}>
//                     🟢 Working
//                 </span>
//             );
//         }

//         if (currentStatus === "broken") {
//             return (
//                 <span style={{ color: "red", fontWeight: "bold" }}>
//                     🔴 Broken
//                 </span>
//             );
//         }

//         return (
//             <span style={{ color: "orange", fontWeight: "bold" }}>
//                 🟡 Checking...
//             </span>
//         );
//     };


//     return (
//         <>
//             <h1>Channel List</h1>

//             <button className="btn">
//                 <Link to="/">Back to Home</Link>
//             </button>

//             {channels.length > 0 ? (

//                 <table border="2">

//                     <thead>

//                         <tr>
//                             <th>Ch.NO</th>
//                             <th>Name</th>
//                             <th>Status</th>
//                             <th>Link</th>
//                             <th>Actions</th>
//                         </tr>

//                     </thead>


//                     <tbody>

//                         {channels.map((data, index) => (

//                             <tr key={data.id}>

//                                 <td>
//                                     {index + 1}
//                                 </td>

//                                 <td>
//                                     {data.name}
//                                 </td>

//                                 <td>
//                                     {getStatus(data.id)}
//                                 </td>


//                                 <td>

//                                     <button
//                                         onClick={() =>
//                                             deleteData(data.id)
//                                         }
//                                         style={{
//                                             color: "red"
//                                         }}
//                                     >
//                                         Delete
//                                     </button>


//                                     <button
//                                         onClick={() =>
//                                             editData(data.id)
//                                         }
//                                     >
//                                         Edit
//                                     </button>

//                                 </td>
//                                 <td>   <video
//         src={data.link}
//         controls
//         preload="none"
//         width="300"
//         height="200"
//     />
// </td>
//                                 <td>
//                                     {data.link}
//                                 </td>

//                             </tr>

//                         ))}

//                     </tbody>

//                 </table>

//             ) : (

//                 <h1>
//                     Unable to connect with server.
//                     Try again later.
//                 </h1>

//             )}

//         </>
//     );
// }











// checkbox








import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HLSPlayer from "./HLSPlayer";

export default function Modify() {
    const [channels, setChannels] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [sortData, setSortData] = useState([]);
    // const [url,setUrl] = useState(localStorage.getItem('paths'));

    const navigate = useNavigate();

    const url = "http://localhost:3000/channels/";
    // const url = "http://localhost:3000/channels/";
    // const url = "http://192.168.17.30:3000/channels";
    // const url = "https://steady-cheesecake-20992f.netlify.app/.netlify/functions/channels";

    // "https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/Livetv.json

    // Get channels
    const channelList = async () => {
        let response = await fetch(url);
        response = await response.json();
        setChannels(response);

        const sortingData = [...response].sort((a, b) =>
            a.name.localeCompare(b.name)
        );

        setChannels(response);
        setSortData(sortingData);
    };

    useEffect(() => {
        channelList();
    }, []);

    // --------------------------------
    // Select / Unselect one channel
    // --------------------------------

    const handleCheckbox = (id) => {
        setSelectedIds((prev) => {
            if (prev.includes(id)) {
                // Remove id
                return prev.filter((item) => item !== id);
            } else {
                // Add id
                return [...prev, id];
            }
        });
    };

    // --------------------------------
    // Select All
    // --------------------------------

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(channels.map((channel) => channel.id));
        } else {
            setSelectedIds([]);
        }
    };

    // --------------------------------
    // Delete selected channels
    // --------------------------------

    const deleteSelected = async () => {

        if (selectedIds.length === 0) {
            alert("Please select at least one channel");
            return;
        }

        const confirmDelete = window.confirm(
            `Delete ${selectedIds.length} selected channel(s)?`
        );

        if (!confirmDelete) {
            return;
        }

        try {

            // Delete every selected ID
            await Promise.all(
                selectedIds.map((id) =>
                    fetch(url + id, {
                        method: "DELETE",
                    })
                )
            );

            alert("Selected channels deleted");

            // Clear selection
            setSelectedIds([]);

            // Refresh data
            channelList();

        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    // --------------------------------
    // Delete one channel
    // --------------------------------

    const deleteData = async (id) => {

        await fetch(url + id, {
            method: "DELETE",
        });

        alert("Deleted");

        channelList();
    };

   const editCategory = async (id, category) => {
    await fetch(url + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            category: category,
        }),
    });

    channelList();
};



    // --------------------------------
    // Edit
    // --------------------------------

    const editData = (id) => {
        navigate("/edit/" + id);
    };

    return (
        <>
            <div style={{ position: 'sticky', top: '-60px' }}> <h1>Channel List</h1>

                <button className="btn">
                    <Link to="/">Back to Home</Link>
                </button>

                <br />
                <br />

                {/* Delete Selected Button */}

                <button
                    onClick={deleteSelected}
                    disabled={selectedIds.length === 0}
                    style={{
                        backgroundColor:
                            selectedIds.length > 0
                                ? "red"
                                : "gray",
                        color: "white",
                        padding: "8px 15px",
                        border: "none",
                        cursor:
                            selectedIds.length > 0
                                ? "pointer"
                                : "not-allowed",
                    }}
                >
                    Delete Selected ({selectedIds.length})
                </button>
            </div>

            <br />
            <br />

            {channels.length > 0 ? (

                <table border="2">
                    <thead>
                        <tr>

                            {/* Select All */}

                            <th>
                                <input
                                    type="checkbox" style={{ width: '50px', height: '50px' }}
                                    checked={
                                        channels.length > 0 &&
                                        selectedIds.length ===
                                        channels.length
                                    }
                                    onChange={handleSelectAll}
                                />
                            </th>

                            <th>Ch.NO</th>
                            <th>Name</th>
                            <th>Video data link</th>
                            <th>Actions</th>
                            <th>Link</th>

                        </tr>
                    </thead>

                    <tbody>

                        {/* {channels.map((data, index) => ( */}
                        {sortData.map((data, index) => (

                            <tr key={data.id}>

                                {/* Individual checkbox */}

                                <td>
                                    <input
                                        type="checkbox" style={{ width: '50px', height: '50px' }}
                                        checked={selectedIds.includes(
                                            data.id
                                        )}
                                        onChange={() =>
                                            handleCheckbox(data.id)
                                        }
                                    />
                                </td>

                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    {data.name}
                                </td>

                                <td>video
                                    {/* <video
                                        src={data.link}
                                        controls
                                        preload="none"
                                        width="300"
                                        height="200"
                                    /> */}
                                    {/* <HLSPlayer url={data.link} /> */}

                                    {/* <HLSPlayer url={data.link} /> */}
                                </td>


                                <td>

                                    <button
                                        onClick={() =>
                                            deleteData(data.id)
                                        }
                                        style={{
                                            color: "red",
                                        }}
                                    >
                                        Delete
                                    </button>

                                    <button
                                        onClick={() =>
                                            editData(data.id)
                                        }
                                    >
                                        Edit
                                    </button>

                                </td>
                                <td>




                                    <select
                                        value={data.category}
                                        onChange={(event) =>
                                            editCategory(data.id, event.target.value)
                                        }
                                    >
                                        <option value="">select</option>
                                        <option value="Movies">Movies</option>
                                        <option value="Music">Music</option>
                                        <option value="News">News</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Education">Education</option>
                                        <option value="Cartoon">Cartoon</option>
                                    </select>


                                </td>
                                <td>{data.category}</td>

                                <td>
                                    {data.link.length>50?data.link.slice(0,50)+"...":data.link}
                                </td>

                            </tr>

                        ))}

                    </tbody>
                </table>

            ) : (

                <h1>
                    Unable to connect with server try again later
                </h1>

            )}
        </>
    );
}