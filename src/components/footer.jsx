import React from "react";
import "../../styles/footer.css"

var date= new Date().getFullYear()

console.log(date)

function Footer() {
    return (

        <footer>
            <p>To know more-explore my page</p>
            <p>copyright@{date}</p>
        </footer>
    )
    
}



export default Footer;