import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
export default function EditChannel() {
    const { id } = useParams();
    
    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [link, setLink] = useState('');
    
    
    const navigate = useNavigate();
    const url = "http://localhost:3000/channels/" + id;
    
    const getChannelData = async () => {
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setName(response.name)
        setLogo(response.logo)
        setCategory(response.category)
        setType(response.type)
        setLink(response.link)
    }
    useEffect(() => {
        getChannelData();
    }, [])
    
    async function editData(e) {
        e.preventDefault();
        let response = await fetch(url, {
            method: 'put',
            headers:{
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ name, logo, category,type, link })
        })

        // response = await response.json();
        if (response.ok) {
            await alert('Update Successfully');
            await navigate('/modify')
        }
    }
    return (
        <>
            <h1>Update Details</h1>
            
             <button className="btn"><Link to="/modify">Back</Link></button>
            <form onSubmit={editData}>
                <label htmlFor="name">Name: </label> <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Channel Name" />
                 <label htmlFor="logo">Logo: </label><input type="text" value={logo} onChange={(e) => setLogo(e.target.value)} placeholder="Enter Channel logo link" />
                  {/* <label htmlFor="catagory">Catagory :</label><input type="text" value={category} onChange={(ev) => setCategory(ev.target.value)} placeholder="category" /> */}
                <label htmlFor="type"> Type: </label><select value={type} placeholder="type" onChange={(event) => setType(event.target.value)}>
                    <option name="Free" id="">Free </option>
                    <option name="Paid" id="">Paid </option>
                </select>
                <label htmlFor="type"> Catagory: </label><select value={category} placeholder="Catagory" onClick={(event) => setCategory(event.target.value)} name="Movies">
                    <option name="Movies" id="">Movies</option>
                    <option name="Music" id="">Music </option>
                    <option name="News" id="">News </option>
                    <option name="Sports" id="">Sports</option>
                    <option name="Education" id="">Education </option>
                    <option name="Cartoon" id="">Cartoon </option>
                </select>
                <label htmlFor="link"> Link:</label><input type="text" value={link} onChange={(event) => setLink(event.target.value)} placeholder="Enter Channel Link" />
                <button className="btn" type="submit">Update Channel</button>
            </form>
        </>
    )
}
