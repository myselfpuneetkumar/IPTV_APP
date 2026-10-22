import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer({version}){
    
    return(
        <>
        <footer>
            <h1>Live IPTV <sub>v{version}</sub></h1>
            
            <p>Made With &hearts; by <Link to="http://puneetkumar.netlify.app/">Puneet Kumar</Link></p>
            <p><Link to="/whatsnew">Readme</Link> | <Link to="http://puneetkumar.netlify.app/"> Contact Us</Link></p>
  
        </footer>
        </>
    )
}





