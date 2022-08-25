import React from "react";

function Footer(){
    let footerStyle ={
        position:"flex",
        bottom:"0",
        width:"100%",
        marginTop: '40px'
    }
    return(
        <div style={footerStyle} className="bg-dark text-light py-3">
            <h4 className="text-center">Footer</h4>
        </div>
    )
}

export default Footer;