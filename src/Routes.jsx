import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Modify from "./Modify";
import AddChannels from "./AddChannels";
import EditChannel from "./EditPage";
import ImportM3U from "./Import";
import Video from "./Video";
import Scroll from "./Scroll";
import Sort from "./Sorting";
import Footer from "./Footer";
import Header from "./Header";
import Live from "./Live";
import WhatsNew from "./WhatsNew";
import About from "./About";
import Category from "./Category";
import { useEffect, useState } from "react";
import Hover from "./Hover";
import ParentComponent from "./Props";
import NotFound from "./Not-Found";

export default function RoutesPath() {
    const[url,setUrl] = useState('')
    console.log(url);
    
    let version = "2.0.1"

    const [showHomeLink, setShowHomeLink] = useState(false);



const [selectedFruit, setSelectedFruit] = useState("apple");

  // 2. Define an options array to keep the data clean
  const fruitOptions = [
    { value: "apple", label: "🍎 Apple" },
    { value: "banana", label: "🍌 Banana" },
    { value: "orange", label: "🍊 Orange" },
  ];

  // 3. Handler function to update state when the child triggers an event
  const handleFruitChange = (newValue) => {
    setSelectedFruit(newValue);
  };


    const urlList = [
        {
            value:'http://localhost:3000/channels',
            label:'localhost'
        }
    ]

    const handleScroll = () => {
        if (window.scrollY > 250) {
            setShowHomeLink(true);
        } else {
            setShowHomeLink(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


   function handleUrl(event){
    // let urlnew = event.target.value;
    setUrl(event);
    console.log(urlnew);
   }
   useEffect(()=>{
    // handleUrl();
   })
    return (
        <>
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
                    <img src={'./nextplay.png'} style={{ height: '40px', width: '40px', transform: 'rotate(270deg)' }} alt="" />
                </a>
            )}

            <Header />


            <div>
                <h1 style={{ padding: '0', margin: '0' }}>IPTV <sub style={{ fontSize: '20px' }}>V {version}</sub> Channel List</h1>
                {/* <select name="" id="">
                    <option value="http://localhost:3000/channels" onChange={(e)=>handleUrl(e.target.value)}>localhost</option>
                    <option value="http://localhost:3000/c" onClick={(e)=>setUrl(e.target.value)}>locq</option>
                    <option value="http://localhost:3000/channels" onClick={(e)=>setUrl(e.target)}>localhost</option>
                    
                </select> */}
                <Routes >
                    {/* <Route path="/" element={<Home url = {url}/>}></Route> */}
                    <Route path="/" element={<Home />}></Route>
                    {/* <Route path="/" element={<Home 
                    label="Choose a fruit:"
        options={fruitOptions}
        selectedValue={selectedFruit}
        onSelectionChange={handleFruitChange}
                    />}></Route> */}




                    <Route path="/modify" element={<Modify />}></Route>
                    <Route path="/addchannels" element={<AddChannels />}></Route>
                    <Route path="/edit/:id" element={<EditChannel />}></Route>
                    <Route path="/import" element={<ImportM3U />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/scroll" element={<Scroll />} />
                    <Route path="/sorts" element={<Sort />} />
                    <Route path="/live" element={<Live />} />
                    <Route path="/whatsnew" element={<WhatsNew />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/animate" element={<Hover />} />
                    <Route path="/props" element={<ParentComponent />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer version={version} />


            </div>
        </>
    )
}