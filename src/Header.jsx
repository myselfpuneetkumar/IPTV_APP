import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.css'

export default function Header() {
  const[toggle,setToggle] = useState(true)
  const[name,setName] = useState('')
  const[age,setAge] = useState('')

  // let username = '';
  // let userage = '';
  function handleHeader() {
    const header = document.querySelector("nav");

    if(toggle){
    header.style.display ="none"
    setToggle(false)
  }
  else{
      header.style.display =""
      setToggle(true)

    }
  }
const updateInfo = (e)=>{
  //  e.preventDefault();

  localStorage.setItem('name',name);
  localStorage.setItem('age',age);
  alert('submit Successfully')

}

const showPopup = ()=>{

  document.querySelector('.popupcontainer').style.display='block'
}
  const Popup = ()=>{
    document.querySelector('.popupcontainer').style.display='none'
  }

  useEffect(()=>{
    let username = localStorage.getItem('name');
    setName(username);
    let userage = localStorage.getItem('age');
    setAge(userage);
    if (username) {
    setName(username);
    }

  if (userage) {
    setAge(userage);
  }
  },[])
  return (
    <>
      <header style={{ width: '100%', margin: '0' }}>
        {/* <header */}


          <h2 style={{ color: 'white' ,width:'400px'}}><span> <img src={'logo.png'} className="logo" height='50px' width="50px" style ={{border:'2px solid transparent ',borderRadius:'50%',marginTop:'2px'}} alt="no image" /></span>Live IPTV <sub style={{ fontSize: '12px' }}>V 1.0.2</sub></h2>
          <button className="menu" style={{position:'absolute', right:'10px',top:'25px'}} onClick={handleHeader}>{toggle?'X':'☰'}</button>
         
            
        
            
        <nav>
          <Link to="/">Home</Link>

          <Link to="/category">Categories</Link>
          <Link to="/whatsnew">WhatsNew</Link>
          <Link to="/about">About</Link>

        
            <button onClick={showPopup} style={{color:'black',width:'',backgroundColor:'transparent',height:'2em',fontSize:'large'}}>{name?name:'Register'}

            </button>
          

        </nav>

      </header>

      <div className="popupcontainer">
        <form action={updateInfo} style={{border:'none',display:'flex',flexDirection:'column',boxShadow:'none', border:'2px solid Pink'}}>
        <h1>Hello User</h1> <br />

      <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      <br />
      <input type="number" value={age}  placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/>
      <br />
      <input type="submit" value="submit" />
        </form>

        <button style={{position:'absolute',right:'10px',top:'10px',margin:'20px'}} onClick={Popup}> X</button>
      </div>



      {/* <header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>

<main>
  <div class="content">jj</div>
</main> */}
    </>
  )
}