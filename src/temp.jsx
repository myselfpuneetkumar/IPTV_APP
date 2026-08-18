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
                                    {/* <td><img src={data.logo} alt="" height='50px' width='50px'/></td> */}
                                    <video src={data.link} controls width="90px" height="90px"></video>
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