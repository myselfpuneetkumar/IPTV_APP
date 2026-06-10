import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Modify() {
    const [channels, setChannels] = useState('');
    let count = 1;
    const navigate = useNavigate();

    const url = "http://localhost:3000/channels/";

    const channelList = async () => {

        let response = await fetch(url);
        response = await response.json();
        setChannels(response);
    }
    useEffect(() => {
        channelList();
    }, [])

    const deleteData = async(id)=>{
        let response = fetch(url+id,{
            method:'delete',
            // body:JSON.stringify()
        })
        // response = await response.json();
        await alert('deleted')
        channelList();
        // console.log(id)

    }
    const editData = (id)=>{
        navigate('/edit/'+id)
    }

    return (
        <>
            <h1> Channel List</h1>
             <button className="btn"><Link to="/">Back to Home</Link></button>
            
           
            {
                    channels? <table border="2px solid black">
                <tr><th>Ch.NO</th>
                    <th>Name</th>
                    <th>category</th>
                    <th>Logo</th>
                    <th>type</th>
                    <th>Link</th>
                    <th>Actions</th>
                </tr>
           
               
               
                {
                    
                    channels && channels.map((data,index) => {
                        return (
                            
                               <tr>
                                    <td>{count++}</td>
                                    <td>{data.name}</td>
                                    <td>{data.category}</td>
                                    <td><img src={data.logo} alt="" height='50px' width='50px'/></td>
                                    {/* <td max={10}>{data.logo}</td> */}
                                    <td >{data.type}</td>
                                    <td >{data.name}</td>
                                    <td>
                                        <button onClick={()=>deleteData(data.id)} style={{color:'red'}}>Delete</button>
                                        <button onClick={()=>editData(data.id)}>Edit</button>
                                    </td>
                                   
                                </tr> 
                                
                                
                                )
                            }
                        )
                }
                </table>
                : <h1>Unable to connect with server try again later</h1>
            }
            
        </>
    )
}