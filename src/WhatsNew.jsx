// import './Tailwind.css'
export default function WhatsNew(){
    return(
        <>
        <div className="w-screen border-2" style={{width:'100vw',display:'flex', flexDirection:'row' , flexWrap:'wrap'}}>
            <div className="w-full bg-yellow-200" style={{width:'95%', border:'5px double pink',backgroundColor:'green', color:'blue', margin:'20px',marginRight:'30px',borderRadius:'10px'}}>
            <h1>------Whats New-----</h1>

            <p>WhatsNew is a feature which describe the working and updations in the releses versions</p>

            <h2>Live IPTV V1.0.0</h2>
            <p>This is the basic And the main version relesed on May 2026 <br /> In this version we have used the basic CSS3 For styling</p>

            ------------------------------------------------------------------------
            <h3>Live IPTV V1.0.1</h3>
            <p>This version contains the Copy fetaure relesed on August 2026 <br />
            if a user want to copy the url of selected channel they might easily copy the url and use them. <br />
            fix the Header and Footer Layout 
            </p>
            ------------------------------------------------------------------------

            <h3>Live IPTV V1.0.2</h3>
            <p>Released on september last <br />
            fix bugs,change backgroundColor <br />
            Category tab is added in header   <br />
            that helps the user to select their favurite Channel Easily
            <br />
            ----</p>
            
            </div>
        </div>
        </>
    )
}