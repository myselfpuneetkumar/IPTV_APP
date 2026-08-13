import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <header>

<nav>

       <h2  style={{color:'white'}}>IPTV <sub style={{ fontSize: '8px' }}>V 1.0</sub> Channel List</h2>
    <Link to="/">Home</Link>
    <Link to='/live' >Live TV</Link>
    <Link to="#">Categories</Link>
    <Link to="#"></Link>
    <Link to="#">About</Link>

</nav>
        
        </header>
        </>
    )
}