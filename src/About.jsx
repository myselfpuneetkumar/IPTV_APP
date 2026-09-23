// import './Tailwind.css'
export default function About(){
    return(
        <>
        <div className="w-screen border-2" style={{width:'100vw',display:'flex', flexDirection:'row' , flexWrap:'wrap'}}>
            <div className="w-full bg-yellow-200" style={{width:'95%', height:'auto', border:'5px double pink',backgroundColor:'rgba(247, 55, 170, 0.936)', margin:'20px',marginLeft:"10px", borderRadius:'10px'}}>
            <h1>About IPTV</h1>

            <img src={'logo.png'} height='180px' width="180px" alt="no image" border="2px double black" />

            

            <h1 style={{color:'black '}}>What is Live Iptv?</h1>
            <p style={{color:'',fontSize:'large'}}>Live Iptv is a easy method to stream the channels which are available by dth providers and those providers which makes the IP address as a medium to stram the live channels as like a settop box works with televisions <br />Live Iptv is easy to use as compared to sattelite receiver</p>
            <h1 style={{color:''}}>Why use Live Iptv?</h1>
            <p style={{color:''}}>There is no need to install any physical device <br /> we have to use only internet and stream as any where specially those areas where the sattelite signals are weaks or not too good</p>
            <h1 style={{color:''}}>What special from others?</h1>
            <ul style={{color:'yellow',fontSize:'large',fontStyle:'italic'}}    >
                <li>No Subscrption is required for use</li>
                <li>Device Friendly</li>
                <li>Easy to Search any channel</li>
                <li>separate category for channels</li>
                <li>autoplaylist generates when search a category</li>
                <li>multi resolutions are available for different picture quality</li>
                <li>No need to install any software</li>
                <li>SPA(single page Application) which make a smooth experience</li>
            </ul>
            <h4 style={{textAlign:'left'}}>Note--</h4>
            <p style={{textAlign:'left'}}>The Images ,Logo,Audio,video are the copright reserved property of their respective owners we used here for education as well as Enterntainment Purposes only <br /> If any one have any questions or any query contact to <a href="mailto:mytechnicalteam08@gmail.com" style={{color:"violet"}}> mytechnicalteam08@gmail.com</a> </p>
            </div>
            
        </div>
        </>
    )
}