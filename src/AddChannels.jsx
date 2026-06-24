import { useState } from "react"
import { Link } from "react-router-dom";

export default function AddChannels(){

    const[name,setName]=useState();
    const[logo,setLogo]=useState();
    const[category,setCategory]=useState();
    const[type,setType]=useState();
    const[link,setLink]=useState();
    async function addData(){
        const url = "http://localhost:3000/channels"
        let response = await fetch(url,{
            method:'post',
            body:JSON.stringify({name,logo,category,type,link})
        })

        // response = await response.JSON();
        if(response.ok){
            await alert('Add Successfully');
        }
    }
    return(
        <>
        <h1>Add Details</h1>
         <button className="btn"><Link to="/">Back to Home</Link></button>

        <form onSubmit={addData}>
            <label htmlFor="name">Name: </label>
             <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Channel Name" name="name"/>
              <label htmlFor="logo">Logo: </label><input type="text" onChange={(e)=>setLogo(e.target.value)} placeholder="Enter Channel logo link" name="logo"/>
            {/* <label htmlFor="catagory">Catagory :</label><input type="text"  onChange={(evt)=>setCategory(ev.target.value)} placeholder="category" name="catagory"/> */}

             <label htmlFor="type"> Catagory: </label><select placeholder="Catagory" onClick={(event) => setCategory(event.target.value)}>
                    <option name="Movies" id="">Movies</option>
                    <option name="Music" id="">Music </option>
                    <option name="News" id="">News </option>
                    <option name="Sports" id="">Sports</option>
                    <option name="Education" id="">Education </option>
                    <option name="Cartoon" id="">Cartoon </option>
                </select>
           <label htmlFor="type"> Type: </label><select value='' placeholder="type" onClick={(event)=>setType(event.target.value)} name="type">
                <option name="Free" id="">Free </option>
                <option name="Paid" id="">Paid </option>
            </select>
           <label htmlFor="link"> Link:</label> <input type="text" onChange={(event)=>setLink(event.target.value)} placeholder="Enter Channel Link"/>
            <button className="btn" type="submit">Add Channel</button>
        </form>
        </>
    )
}