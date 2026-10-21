import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css'
// import {channelList} from "./Home";



{/* <Home /> */}
export default function Header() {
  const[toggle,setToggle] = useState(true)
  const[name,setName] = useState('User')
  const[age,setAge] = useState('')
  const[url,setUrl] = useState('https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/db.json')
  const[theme,setTheme] = useState('')
  const[passcode,setPasscode] = useState('')

  // let username = '';
  // let userage = '';


  let navigate = useNavigate();
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

const checkPasscode = ()=>{
  // e.preventDefault();

  let code = prompt('enter the Passcode')

  if(code == '956001'){
    localStorage.setItem('paths',"https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/db.json")
    alert("congratulations.... \n You Have Successfully Subscribe Your Plan \nPlease don't change server \notherwise you have to enter again the Passcode \nEnjoy......")
     document.querySelector('.popupcontainer').style.display='none'
    navigate('/category')

  }
  else if(code == 'DLNA'){
     localStorage.setItem('paths',"https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/Personal.json")
    alert("congratulations.... \n You Are under Premium mode \nEnjoy......")
     document.querySelector('.popupcontainer').style.display='none'
    navigate('/category')
  }
  else{
    alert('please enter correct Passcode')
  }
}


const updateInfo = (e)=>{
  //  e.preventDefault();
localStorage.setItem('paths',url)
  localStorage.setItem('name',name);
  localStorage.setItem('age',age);
      document.querySelector('.popupcontainer').style.display='none'
      // channelList;

  navigate('/category');


  alert('submit Successfully')

  // if(passcode == '1234'){
  //   // setUrl("http://localhost:3000/channels")
  //   setUrl("http://localhost:3000/channels")
  //   // localStorage.setItem('paths',"http://localhost:3000/channels")
  //   alert('Congratulations You have successfully claim ')

  // }


}
function themeChange(){
  const root = document.querySelector("#root");

// root.style.backgroundColor = "green";
// root.style.backgroundImage = "linear-gradient(green, yellow)";
if(theme=='pinkish'){
  root.style.backgroundImage = "linear-gradient(pink,red,white)";

  // root.style.color = "white";
  
    // document.getElementById('#root').style.backgroundColor = 'green'
    // document.body.style.backgroundColor = 'black'
    
  }
else if(theme=='light'){
 root.style.backgroundImage = "linear-gradient(yellow,white)";

  
    // document.getElementById('#root').style.backgroundColor = 'green'
    // document.body.style.backgroundColor = 'black'
    
  }
  else if(theme=='greenish'){
 root.style.backgroundImage = "linear-gradient(green, yellow)";
  }

else if(theme=='colourful'){
  root.style.backgroundImage =  "linear-gradient(rgb(19, 255, 220), rgba(181, 218, 80, 0.495),rgba(234, 234, 156, 0.368),rgba(223, 107, 107, 0.76),rgba(93, 93, 255, 0.372),rgba(231, 134, 231, 0.813),pink,rgb(19, 255, 220))";
}
  else{
    document.body.style.backgroundColor = ' '

  }
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
  localStorage.setItem('paths',url)
  themeChange();
  },[url,'paths',theme])
  return (
    <>
      <header style={{ width: '100%', margin: '0' }}>
        {/* <header */}


          <h2 style={{ color: 'white' ,width:'400px'}}><span> <img src={'logo.png'} className="logo" height='50px' width="50px" style ={{border:'2px solid transparent ',borderRadius:'50%',marginTop:'2px'}} alt="no image" /></span>Live IPTV <sub style={{ fontSize: '12px' }}>V 2.0.4</sub></h2>
          <button className="menu" style={{position:'absolute', right:'10px',top:'25px'}} onClick={handleHeader}>{toggle?'X':'☰'}</button>
         
            
        
            
        <nav>
          <Link to="/">Home</Link>

          <Link to="/category">Categories</Link>
          <Link to="/whatsnew">WhatsNew</Link>
          <Link to="/about">About</Link>

        
            <button onClick={showPopup} className="" style={{color:'black',width:'',backgroundColor:'transparent',height:'2em',fontSize:'medium',cursor:'pointer'}}>{name?name:'Register'}

            </button>
          

        </nav>

      </header>

      <div className="popupcontainer">
        <form action={updateInfo} style={{border:'none',display:'flex',flexDirection:'column',boxShadow:'none', border:'2px solid Pink', height:'auto'}}>
        <h1>Hello {name}</h1> <br />
        <h2>Set NickName</h2>

      <input style={{width:'250px'}} type="text" value={name} maxLength={6} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      {/* <h2>Enter Age</h2> */}

      <h2>Set Themes</h2>
       <select  style={{width:'250px'}} name="" id="" onClick={(e)=>setTheme(e.target.value)}>

      <option value="no">Select</option>
    
      <option value="pinkish">Pinkish</option>
      <option value="greenish">Greenish</option>
<option value="colourful">
    colourful
</option>
</select>

      
      {/* <input  style={{width:'250px'}} type="number" value={age}  placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/> */}
      
    <h2>Change Server</h2>
      <select  style={{width:'250px'}} name="" id="" onChange={(e)=>setUrl(e.target.value)}>

      <option value="no">Select</option>
      {/* <option value="http://localhost:3000/">lowqwqwql</option> */}
      {/* <option value="http://localhost:3000/channels">loca</option> */}
      {/* <option value="http://10.188.247.30:3000/channels">on</option> */}
      {/* <option value="https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/db.json
">Server 1</option> */}
      <option value="https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/db_old.json
">Server 1</option>
      {/* <option value="https://raw.githubusercontent.com/myselfpuneetkumar/IPTV_APP/main/API/Livetv.json
">Server 4</option> */}
<option value="https://raw.githubusercontent.com/bugsfreeweb/LiveTVCollector/main/LiveTV/India/LiveTV.json">
    Server 2
</option>
<option value="http://localhost:3000/channels">local</option>
{/* <option value="http://192.168.17.30:3000/channels">localnew</option> */}
<option value="http://192.168.97.30:3000/channels">localnew</option>
</select>
{/* <h2>or</h2> */}
{/* <input style={{width:'250px'}} type="password" value={passcode} maxLength={6} placeholder="Enter Name" onChange={(e)=>setPasscode(e.target.value)}/><span style={{display:'inline'}}><button onClick={()=>checkPasscode} style={{width:'50px'}}>set</button></span> */}
Note:Please refresh after change server. Don't Select Local if you are using as a User not a Developer
      <input style={{width:'auto'}} type="submit" value="submit" />
        </form>
          <details>
        <summary>more
        </summary>

        <h2>or</h2>
        <p style={{color:'black'}}>If you have a Passcode Set here</p>
        <span style={{display:'inline'}}><button onClick={checkPasscode} style={{width:'50px'}}>set</button></span>
          </details>

        <button style={{position:'absolute',right:'10px',top:'10px',margin:'20px',cursor:'pointer'}} onClick={Popup}> X</button>
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