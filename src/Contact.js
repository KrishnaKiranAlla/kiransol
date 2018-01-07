import React, { Component } from 'react';
class Contact extends Component {
    render() {
      return (
<div className=" pb-2">
            <div className="row" style={{"margin-left":"375px","padding-top":"40px"}}>
                <input type="text" placeholder="Name" className="mr-4" style={{" width":"220px","height":"25px"}}/>
                <input type="text" placeholder="Email" style={{"color":"blue","width":"300px", "height":"25px","float":"right","margin-right":"300px"}}/>
            </div>
            <div style={{"margin-left":"375px","padding-top":"25px"}}>
                <textarea placeholder="Message" cols="75" rows="8"></textarea><br/><br/>
            <button className="btn-danger " style={{"margin-left":"220px"}}>Send Message</button>
            </div>
            <h5 className="text-center mr-5 pt-3" style={{"color":"green"}}>Available Now!</h5>
            <div className="text-center">
                <h5 >Say hi!! Feel free to drop a message. I'll will be happy to help you :) </h5>

           <h5 > Email: mail2me.krishkiran@gmail.com</h5>
                <h5>Mobile no.:+91 8686144086</h5>
        </div>
        </div>
);
}
}

export default Contact;
