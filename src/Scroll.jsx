import { useEffect, useState } from "react";
import Card from "./Card";

export default function Scroll() {

    const [channels, setChannels] = useState([]);

    const [url, setUrl] = useState("");

    // GET URL SAVED BY HOME
    useEffect(() => {

        const savedUrl = localStorage.getItem("url");
        const savpath = localStorage.getItem("paths");

        console.log(savedUrl);
        console.log(`savepath${savpath}`);
        

        if (savedUrl) {
            setUrl(savedUrl);
        }

    }, []);


    // FETCH USING THAT URL
    const channelList = async () => {

        try {

            const response = await fetch(url);

            const data = await response.json();

            console.log("Category URL:", url);

            if (Array.isArray(data)) {

                setChannels(data);

            } else if (Array.isArray(data.channels)) {

                setChannels(data.channels);

            }

        } catch (error) {

            console.error(error);

        }

    };


    useEffect(() => {

        if (url) {
            channelList();
        }

    }, [url]);


    return (
        <>
            <h1>IPTV Categories</h1>

            <Card
                url={url}
                filteredCategory="movies"
            />

        </>
    );
}


// import  { useState, useEffect } from "react";

// function Scroll() {
//   const [showHomeLink, setShowHomeLink] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setShowHomeLink(true);
//       } else {
//         setShowHomeLink(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div style={{ height: "2000px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Welcome to My Page</h1>
//       <p>Scroll down to see the Home link appear...</p>

//       {showHomeLink && (
//         <a
//           href="/"
//           style={{
//             position: "fixed",
//             bottom: "20px",
//             right: "20px",
//             background: "#007BFF",
//             color: "white",
//             padding: "10px 15px",
//             borderRadius: "5px",
//             textDecoration: "none",
//           }}
//         >
//           Home
//         </a>
//       )}
//     </div>
//   );
// }

// export default Scroll;
