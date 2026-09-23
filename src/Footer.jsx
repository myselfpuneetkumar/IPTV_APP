import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer({version}){
    
    return(
        <>
        <footer>
            <h1>Live IPTV <sub>V{version}</sub></h1>
            
            <p>Made With &hearts; by <Link to="http://puneetkumar.netlify.app/">Puneet Kumar</Link></p>
            <p><Link to="http://puneetkumar.netlify.app/">Readme</Link> | <Link to="http://puneetkumar.netlify.app/"> Contact Us</Link></p>
  
        </footer>
        </>
    )
}





