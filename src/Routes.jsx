import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Modify from "./Modify";
import AddChannels from "./AddChannels";
import EditChannel from "./EditPage";
import ImportM3U from "./Import";
import Video from "./Video";
import Scroll from "./Scroll";
import Sort from "./Sorting";

export default function RoutesPath(){
    return(
        <div style={{padding:'20px'}}>
             <h1 >IPTV <sub style={{ fontSize: '20px' }}>V 1.0</sub> Channel List</h1>
            <Routes >
                <Route path="/" element={<Home />}></Route>
                <Route path="/modify" element={<Modify />}></Route>
                <Route path="/addchannels" element={<AddChannels />}></Route>
                <Route path="/edit/:id" element={<EditChannel />}></Route>
                <Route path="/import" element={<ImportM3U />} />
                <Route path="/video" element={<Video />} />
                <Route path="/scroll" element={<Scroll />} />
                <Route path="/sorts" element={<Sort />} />
            </Routes>
           
        </div>
    )
}