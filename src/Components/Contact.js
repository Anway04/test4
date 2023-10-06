import { useState } from "react"

function Contact()
{
    const [name,setName] = useState("Anway");

    return(
        <div>
            <h1>Contact details</h1>
            <h2>The owner of this page is {name}</h2>
            <button onClick={()=>{setName("Raj")}}>Change owner</button>
        </div>
    )
}
export default Contact;
