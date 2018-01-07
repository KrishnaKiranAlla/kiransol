import React, { Component } from 'react';
class About extends Component {
    render() {
      return (
        <div  style={{"background":"greenyellow"}}>
        <div className="row pb-5 pt-5">
        <div className="col pt-5 ml-5">
        <img src="images/pic13.jpg" style={{"width":"200px"}} alt=""/>
         <h5 style={{"color":"black"}}>Name:KrishnaKirannAlla<br/>&nbsp;&nbsp;&nbsp;&nbsp;Owner at Kirann Soluions <br/>Qulaification:B.E <br/>Hometown:Tanuku</h5>
    </div>
    <div className="pt-5 " style={{"padding-right":"80px"}}>
        <h1 style={{"color":"red"}}><i>We will rise by lifting others</i></h1>
        <h2 style={{"text-decoration":"underline","color":"blue"}}>About</h2><br/>
        <h5 style={{"color":"black"}}>Kirann Solutions will provide solutions for all your queries<br/>
            regarding your bank issues, property managements,<br/>
            income tax related issues. We will also maintain your company<br/>
             data safely.Court issues can be solved both financially and legally.</h5>               
    </div>
    <div className=" mr-5 text-center" style={{"padding-top":"80px","color":"darkred"}}>
        <h1><b>If<br/> you want <br/>to be trusted,<br/>be honest </b></h1>
    </div>
    </div>
</div>

    );
}
}

export default About;
